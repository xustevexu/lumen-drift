"""Key-consistency analysis for music candidates.

For each track: decode to mono, compute a chroma (pitch-class energy) per 0.37 s frame,
estimate the global key with Krumhansl-Kessler profiles, then measure how much tonal
energy falls outside that key's diatonic scale, both overall and in 4 s windows.
Tracks whose melody keeps using notes foreign to the key score a high out-of-key ratio.
"""
import json
import subprocess
import sys
from pathlib import Path

import numpy as np
from scipy.signal import stft
from scipy.ndimage import median_filter

SR = 22050
NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
MAJOR_P = np.array([6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88])
MINOR_P = np.array([6.33, 2.68, 3.52, 5.38, 2.60, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17])
MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11]
MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10]


def decode(path: Path) -> np.ndarray:
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-ac', '1', '-ar', str(SR), '-f', 's16le', '-'],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0


def chroma_frames(x: np.ndarray) -> np.ndarray:
    f, _, Z = stft(x, fs=SR, nperseg=8192, noverlap=8192 - 2048)
    mag = np.abs(Z)
    # harmonic/percussive separation (median filtering): keep sustained pitched content,
    # so drums and noise do not count as "off-key" notes
    H = median_filter(mag, size=(1, 9))
    P = median_filter(mag, size=(31, 1))
    mag = mag * (H > P)
    band = (f >= 65) & (f <= 2100)
    f, mag = f[band], mag[band]
    midi = 69 + 12 * np.log2(f / 440.0)
    pc = np.mod(np.round(midi), 12).astype(int)
    # keep only spectral peaks near a semitone centre (reduces noise/smear)
    cents_off = np.abs(midi - np.round(midi))
    w = np.clip(1 - cents_off / 0.35, 0, 1)
    spec = (mag ** 2) * w[:, None]
    ch = np.zeros((12, spec.shape[1]))
    for k in range(12):
        ch[k] = spec[pc == k].sum(axis=0)
    energy = ch.sum(axis=0)
    keep = energy > np.percentile(energy, 20)  # drop near-silent frames
    ch = ch[:, keep]
    return ch / (ch.sum(axis=0, keepdims=True) + 1e-12)


def best_key(profile: np.ndarray):
    best = None
    for tonic in range(12):
        for mode, P in (('major', MAJOR_P), ('minor', MINOR_P)):
            r = np.corrcoef(profile, np.roll(P, tonic))[0, 1]
            if best is None or r > best[0]:
                best = (r, tonic, mode)
    return best


def out_of_key(ch: np.ndarray, tonic: int, mode: str) -> np.ndarray:
    scale = [(tonic + s) % 12 for s in (MAJOR_SCALE if mode == 'major' else MINOR_SCALE)]
    mask = np.ones(12, bool); mask[scale] = False
    return ch[mask].sum(axis=0)


def analyse(path: Path) -> dict:
    x = decode(path)
    ch = chroma_frames(x)
    prof = ch.mean(axis=1)
    r, tonic, mode = best_key(prof)
    ook = out_of_key(ch, tonic, mode)
    win = max(1, int(4.0 * SR / 2048))
    wins = [ook[i:i + win].mean() for i in range(0, ook.size - win + 1, win)]
    wins = np.array(wins) if wins else np.array([ook.mean()])
    return {
        'track': path.stem, 'seconds': round(x.size / SR, 1),
        'key': f"{NAMES[tonic]} {mode}", 'keyFit': round(float(r), 3),
        'outOfKey': round(float(prof[np.isin(np.arange(12), [(tonic + s) % 12 for s in (MAJOR_SCALE if mode == 'major' else MINOR_SCALE)], invert=True)].sum()), 3),
        'clashWindowsPct': round(float((wins > 0.30).mean() * 100), 1),
        'worstWindow': round(float(wins.max()), 3),
    }


if __name__ == '__main__':
    folder = Path(sys.argv[1])
    rows = [analyse(p) for p in sorted(folder.glob('*.mp3'))]
    rows.sort(key=lambda d: (d['outOfKey'], d['clashWindowsPct']))
    print(json.dumps(rows, indent=1))
