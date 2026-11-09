# LUMEN DRIFT — Design & Project State

Mobile-first 3D space survival / trading prototype. Engine: **Three.js + Vite** (user-selected).
Requirements source: user brief (detailed). This document records implementation decisions only.

## 1. Overview
- Platform: mobile browsers (portrait + landscape), also playable on desktop (keyboard/mouse fallback).
- 3D, third-person chase camera behind the active ship; camera pulls back for bigger hulls.
- Tone: calm, empty, atmospheric space; rare tense outlaw encounters.

## 2. World structure (procedural, seeded)
- Galaxy: 9 star systems generated from a seed, placed on a 2D galaxy map, connected by jump lanes (each system 2–4 links).
- Each system: 1 star (color by class), 2–4 planets (rocky/ice/gas, procedural shader surfaces + atmosphere rim), 1–2 asteroid fields (instanced rocks, ore type per field), 1 space station (safe zone), 0–2 derelicts (salvage), 2 jump gates.
- System economy: each system has a type (Mining, Industrial, Agricultural, High-Tech, Frontier) giving per-commodity price multipliers; prices drift daily and respond to player sales (supply saturation) and recover over time.

## 3. Core loop
1. Fly → mine asteroids (hold MINE button near rock; mining laser beam) or scan planet surface hotspot (low orbit, hold MINE for surface drilling — slower, richer ores).
2. Dock at station (safe) → sell ores / trade goods, buy goods cheap, repair, refuel energy, buy upgrades & ships.
3. Jump to another system via gate (galaxy map) → sell goods high.
4. Rare outlaws (10–15% per day per system) hunt cargo → fight, flee, or dump cargo.
- Salvage derelicts for credits/cargo.
- In-game day = 4 real minutes. Day counter on HUD.

## 4. Commodities
Ores (mined): Ferrite, Silicate Ice, Cobaltine, Lumenite (rare). Trade goods (station-only): Food Packs, Medical Gel, Machine Parts, Data Cores, Luxury Crystals. Each has base price, volume=1 unit.

## 5. Controls (touch)
- Left virtual joystick: steer (yaw/pitch). Right-side throttle slider (0–100%) + BOOST button.
- Context action buttons (right): FIRE (beam), MISSILE (lock-on target), MINE (when in range of rock/hotspot), DOCK (when near station), JUMP (near gate), SALVAGE (near derelict).
- Top-left: TARGET cycle button. Top-right: MAP, MENU.
- Desktop fallback: WASD/arrows steer, Shift boost, R/F throttle, Space fire, E mine/interact, Q missile, M map, T target.

## 6. Combat
- Player ship stats: hull, barrier (shield, regenerates after 3 s without damage), energy (powers beams, mining, boost).
- Beam weapons: hitscan continuous beam with range & DPS; drains energy.
- Missiles: limited ammo, homing on locked target, high damage; bought at stations.
- Outlaws: AI states patrol → hunt (closest cargo-carrying ship incl. traders) → attack → flee at low hull. Defeated outlaws drop cargo crates + bounty credits.
- Encounter rules: at each new day per current system, roll 10–15% (frontier 15%, core 10%). If triggered, outlaws spawn at system edge at a random time in that day. Group size: progression level (net worth tier) 0–1 → 1 ship; 2 → 1–2; 3 → 2–3; 4+ → 2–4.
- Ship destroyed → respawn at last docked station with insurance: lose cargo, keep owned ships, pay 10% credits.

## 7. NPC traffic
- Traders (freighter hulls) spawn and fly station ↔ gate routes carrying goods; they jump out at gates. Player can follow; outlaws target them. Rescued traders pay a small reward when outlaws near them die.
- Miners: occasional NPC miners at asteroid fields (ambient life).

## 8. Ships & upgrades
Hulls (owned list, switch at station hangar):
| Hull | Price | Hull HP | Cargo | Slots | Speed | Role |
|---|---|---|---|---|---|---|
| Wren Shuttle | start | 100 | 20 | 4 | 1.0 | starter |
| Mule Freighter | 18,000 | 220 | 80 | 5 | 0.8 | trading |
| Kestrel Striker | 32,000 | 180 | 30 | 6 | 1.25 | combat |
| Bastion Warden | 140,000 | 650 | 160 | 8 | 0.7 | capital |
Modules per ship (independent levels 0–3): Engine, Cargo Pod, Barrier, Beam, Missile Rack, Mining Laser, Sensors, Hull Plating. Each level gives a clear numeric stat increase (shown before purchase as before→after).

## 9. UI / HUD
- Start screen (combined start + loading) per UI fingerprint below.
- HUD: top bar (credits, day, system name), status bars (hull/barrier/energy) bottom-left above joystick, cargo meter, radar ring (sensors range) top-left, target panel, context buttons, toasts for events ("Outlaw signal detected").
- Station panel: tabs MARKET / HANGAR / UPGRADES / SERVICES, list rows with buy/sell ±.
- Galaxy map: 2D overlay with systems, lanes, economy type, danger level; pick destination when at gate.
- Death/insurance dialog; pause menu with save/reset. Autosave to localStorage on dock.

### UI design fingerprint
- Startup: right action group (title "LUMEN DRIFT", START, measured loading bar of stamp segments, secondary "New Game"), bottom rules strip (Steer: left stick · Throttle: right slider · Mine/Trade/Fight), center: live 3D scene of the Wren shuttle orbiting a planet behind a light navy tint.
- Print style: 2–3 px dark ink outlines, hard 4 px offset shadows (down-right, no blur), square label corners with a small notch on primary button, 1–2 px registration offset on title in cool ink, sparse halftone dots on panel corners.
- Ink palette (space-adapted): Paper `#EFE6D2`, Dark ink `#141826`, Warm ink `#F0703C` (signal orange — primary action, danger), Cool ink `#3FB8C8` (barrier teal — secondary/selection). Semantic: green `#7BC86C` for profit with ▲ glyphs, warning labels always paired with icons/text.
- Type: title "Russo One"-like heavy sans via system fallback (font-weight 900, Arial Black / Impact fallback, letter-spacing), body system-ui 15–17 px; touch targets ≥ 48 px.
- Button states: hover lifts, press moves into shadow (translate 3px, shadow 1px), disabled = no shadow, 50% ink.
- Loading: 12 stamp cells filled from real asset progress (audio + scene build). Becomes START in same spot.
- Entrance: right group slides right, rules strip drops, tint clears over 260 ms.
- HUD uses same contours/shadows in compact form; HUD bars on paper-backed labels.

## 10. Art direction (3D)
- Clean soft-sci-fi ships: white/pale-grey ceramic hulls with teal energy trims and orange accent stripes; outlaws: dark gunmetal with red trims and angular fins; traders: cream/ochre with cargo containers.
- Ships built procedurally in code from beveled extrusions, lathed engine nacelles, smooth-shaded capsules; mid-poly (bevels, rounded edges) — user asked for low-to-mid poly for mobile, so detail comes from bevels, panel-line shader, emissive trims, not flat blockouts.
- Stations: rotating ring + spokes + docking lights. Planets: procedural noise shader with terrain bands, polar caps, clouds, atmospheric rim. Asteroids: displaced icosahedra (detail 3) with ore-vein emissive flecks, instanced.
- Space backdrop: shader-based nebula sky sphere + star points (3 layers), per-system tint.

## 11. Visual finish plan (3D)
- **Post-processing**: EffectComposer → RenderPass → UnrealBloomPass (threshold 0.82, strength 0.65, radius 0.5 — makes beams, trims, stars glow) → custom ColorGrade pass (lift/gamma/gain, teal-shadow/warm-highlight split-tone, saturation 1.08, vignette 0.35, subtle film grain) → OutputPass. ACES tone mapping, exposure 1.05. Mobile: half-res bloom.
- **Shaders**: (a) Hull panel shader (onBeforeCompile on MeshStandardMaterial: triplanar procedural panel lines + emissive trim pulse); (b) Energy barrier shader (fresnel + hex grid + hit ripple uniforms) on all shielded ships; (c) Planet surface + atmosphere rim shader; (d) Nebula sky shader; (e) beam shader (scrolling core + noise falloff).
- **Atmosphere & lighting**: star = PointLight + directional key light toward camera region, hemisphere fill (cool space blue / warm bounce), procedural PMREM environment from the nebula scene for reflections. Volumetric approximation: additive star corona billboards + god-ray sprite stack around star, asteroid-field dust haze (soft particle sprites with distance fade), scene FogExp2 very low density tinted per system for depth. Recorded substitution: no true volumetric raymarching (mobile budget) → layered additive haze/corona sprites.
- Inputs: noise generated in shader (no texture files needed); dust sprite texture generated via canvas at runtime.

## 12. Audio
- BGM: calm ambient space track (retrieved), combat tension track (retrieved, crossfade on outlaw attack).
- SFX: beam, missile, explosion, mining, ui click, sell/coins, jump, alarm, dock. Retrieved via asset library; any missing filled with WebAudio synthesis.

## 12b. Missions (added on request: contract missions + passenger transport)
- Mission board: new station tab MISSIONS. 4–5 offers per station per in-game day (seeded by galaxy seed + system + day, so reloading never rerolls). Max 4 active contracts.
- Types:
  - **Courier**: sealed client cargo to a station or planet colony (same system or 1–3 jumps). Takes hold space, can't be sold. Refundable deposit on accept, forfeited on failure.
  - **Passenger transport**: 1–6 passengers (2 hold units each) to a station or a planet colony. VIP variant (1–2 people) pays ~1.8× but makes outlaw raids more likely (+12% daily raid chance in any system you're in while they're aboard), and outlaws value the ship more as a target.
  - **Supply**: bring N units of a commodity the destination station is short of; pays ~40% over its market price. Uses your own cargo.
- Delivery: station destinations complete automatically on docking; planet destinations via a DROP OFF / DELIVER context action in low orbit above the colony (same point autopilot uses for planets).
- Deadlines in in-game days (end of day D); missed contracts fail on the next day roll. Destroyed ship = contracts aboard fail.
- Navigation: SET COURSE on any contract (sets autopilot to the destination, or to the next gate on the shortest route); gold ★ markers in flight, on the system chart and on the galaxy chart.
- Contract cargo/passengers stay with the ship that took them; switching ships is blocked while they're aboard.
- Persistence: `state.missions`, `state.offers` in the save; older saves get empty lists.
- Asset impact: none needed — UI-only feature using existing fonts, audio (coins/click/alarm) and the print UI style; no new 3D content, so post-processing, shaders and atmosphere are unaffected (impact assessed, prior visual evidence stands).

## 13. Completion criteria
- Start screen loads, START enters flight.
- Player can steer, throttle, mine an asteroid (cargo increases), dock, sell ores (credits increase), buy goods, jump to another system, sell goods there.
- Upgrade purchase changes stats; can buy a second hull and switch.
- Outlaw encounter can occur (and can be force-triggered via debug for testing); combat damages/destroys; loot drops.
- Traders fly between station and gates.
- Post-FX, shaders, atmosphere visible; touch UI usable at phone viewport.

## 14. Stage records

### Asset Preparation — COMPLETE
| Asset | Use | Route | Local path / setup | Check |
|---|---|---|---|---|
| Player hulls (Wren, Mule, Kestrel, Bastion) | player fleet | procedural code (lathe/extrude/rounded-box + panel shader) | src/ships.js | built at load; cohesive clean white/teal/orange style |
| Trader freighter | NPC traffic | procedural (Mule hull, cream/ochre palette) | src/ships.js | — |
| Outlaw raider | enemy | asset library (thing, id 1033493, “sci-fi spaceship… black/red, blue glow”), 6983 tris, webp textures | public/models/outlaw.glb (3.6 MB) | GLB parsed; normalized to 16 m at runtime; procedural fallback if load fails |
| Station, jump gates, derelicts, crates, missiles | world props | procedural | src/ships.js | — |
| Asteroids (3 displaced mid-poly variants, instanced) | mining | procedural JS noise + ore-vein shader | src/world.js / shaders.js | — |
| Planets, star, nebula sky, atmosphere | environment | procedural shaders | src/shaders.js | — |
| Env map (IBL) | reflections | PMREM from procedural sky scene per system | src/world.js | — |
| Soft sprite + ray textures | glow/haze/dust/particles | canvas-generated | src/shaders.js | — |
| BGM calm — soft synth ambient (asset 130918: “Ambient, Synth Pad, Healing, gentle, wonder”), E minor | exploration music | asset library; replaced 120754 (user heard off-key notes) | public/audio/bgm_calm.mp3 | key-consistency check (tools/key_consistency.py): key fit 0.93, 0.4% out-of-key energy, 0% clashing 4 s windows; trimmed silence, 170 s, mean −20.2 dB |
| BGM battle — tense synth ambient (asset 128935: “Ambient, Synth Pad, Tension, Powerful, Hope”), E major (parallel key of calm) | outlaw-combat music | asset library; replaced 129176 (36% out-of-key, 62% clashing windows) | public/audio/bgm_battle.mp3 | key fit 0.97, 3.6% out-of-key, 0% clashing windows; trimmed, −5.5 dB to match calm (played at 0.75 gain) |
| SFX beam, mine, missile, explosion, click, coins, warp, alarm | sfx | asset library (174118, 174095, 174125, 174056, 173027, 173018, 157302, 172898) | public/audio/sfx_*.mp3 | downloaded |
| Fonts | UI | system font stack (no external fonts) | style.css | — |
Rejected: other library ships (inconsistent gritty styles; one resembles a well-known TV franchise ship).

### 3D Post-Processing and Filters — COMPLETE
- Files: `src/post.js` (EffectComposer), wired in `src/game.js` `boot()` with the active gameplay `PerspectiveCamera`; every frame renders via `Post.render()` (`frame()`).
- Chain: RenderPass → UnrealBloomPass (half-res, strength 0.7, radius 0.55, threshold 0.8) → OutputPass (ACES Filmic, exposure 1.05, sRGB) → custom Grade pass (sat 1.1, contrast 1.08, teal shadow split-tone, warm highlight, vignette 0.38, grain 0.035, edge chroma fringe; `uDamage` red edge pulse on hull hits; `uWarp` barrel/chroma warp during gate jumps).
- Runtime confirmed: bloom/grade enabled, strength 0.7, threshold 0.8, toneMapping=ACES(4), exposure 1.05.

### 3D Shader Implementation — COMPLETE
- `src/shaders.js`: hull panel shader (onBeforeCompile triplanar panel lines, per-panel tone/roughness breakup) bound to all procedural ships/station/gates; animated emissive trims; energy barrier shader (fresnel rim + hex lattice + 4 impact ripples driven by `Ship.damage()` hit directions) on every ship; procedural planet shader (rocky/gas bands/ocean spec, clouds, terminator, atmo rim) + additive atmosphere shell; star granulation; nebula sky (fbm, galactic band, dust lanes, hashed stars); asteroid ore-vein emissive seams via instanced attributes (`aOre`, `aDepl` dims veins as rocks deplete); beam, exhaust, portal swirl shaders.
- Visible in screenshots 03/04/09/10/12/20/23 (.preview/run-001).

### 3D Atmosphere and Lighting — COMPLETE
- Per-system star-tinted key DirectionalLight following the play area + rim light + hemisphere fill (nebula-tinted), PMREM environment generated from the procedural sky for metal/glass reflections (`World.build`).
- Atmospheric depth: FogExp2 (0.000045, nebula tint); volumetric substitution (no raymarching on mobile): layered additive star corona + rotating light-ray sprites, asteroid-field haze sprite stacks, camera-local dust motes with distance fade, explosion flash point light.

### 3D Visual Acceptance — COMPLETE
- Evidence: `.preview/run-001/20_fx_on.png` vs `21_fx_off.png` (same frozen frame). ON: bloom glow on star/engines/ore seams, teal-shadow/warm-highlight grade and vignette, star corona + rays, field haze and dust add depth; OFF: flat star disc, no glow, cooler flatter image. Ships, rocks and HUD remain readable in both.
- Additional views: 01 start, 04 mining, 08 warp gate, 10/12 combat barrier ripples, 13 outlaw model, 23 capital ship + planet.
- Fixes made during acceptance: star glare reduced, ore veins thinned, outlaw GLB white-emissive bug fixed, idle barrier reduced to a faint rim.
