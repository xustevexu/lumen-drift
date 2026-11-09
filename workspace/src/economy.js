import { COMMODITIES, COMM, ECONOMIES, HULLS, emptyMods, computeStats } from './data.js';
import { RNG } from './rng.js';

export function newState(seed) {
  return {
    v: 1, seed, credits: 2000, day: 1, dayTime: 0.25,
    systemId: null, pos: null,
    ships: [{ uid: 1, hull: 'wren', mods: emptyMods(), hp: null, missiles: 0, cargo: {} }],
    active: 1, nextUid: 2,
    market: {}, intel: {}, wanted: {},
    outlawRoll: {}, // `${sys}:${day}` -> {hit, at}
    derelictLooted: {},
    stats: { earned: 0, mined: 0, kills: 0, trades: 0, jumps: 0, contracts: 0 },
    missions: [], offers: {},
    tutorial: { mined: false, docked: false, sold: false },
    sound: true, quality: 'high',
  };
}

export class Economy {
  constructor(galaxy, state) {
    this.galaxy = galaxy; this.state = state;
    for (const s of galaxy.systems) if (!state.market[s.id]) state.market[s.id] = this.initMarket(s);
  }
  initMarket(sys) {
    const rng = new RNG(sys.seed + 99);
    const m = { drift: {}, pressure: {}, stock: {} };
    for (const c of COMMODITIES) {
      m.drift[c.id] = rng.range(0.92, 1.08); m.pressure[c.id] = 0;
      m.stock[c.id] = this.sells(sys, c.id) ? Math.round(rng.range(60, 140) * (c.base > 150 ? 0.4 : 1)) : 0;
    }
    return m;
  }
  sys(id) { return this.galaxy.systems[id]; }
  mult(sysId, cid) { return ECONOMIES[this.sys(sysId).eco].mult[cid]; }
  sells(sys, cid) { return ECONOMIES[sys.eco].mult[cid] < 1.0; }
  // price the station PAYS the player
  sellPrice(sysId, cid) {
    const m = this.state.market[sysId];
    return Math.max(1, Math.round(COMM[cid].base * this.mult(sysId, cid) * m.drift[cid] * 0.97 * (1 - 0.32 * Math.min(1, Math.max(0, m.pressure[cid])))));
  }
  // price the player PAYS the station
  buyPrice(sysId, cid) {
    const m = this.state.market[sysId];
    return Math.max(1, Math.round(COMM[cid].base * this.mult(sysId, cid) * m.drift[cid] * 1.05 * (1 + 0.2 * Math.max(0, -m.pressure[cid]))));
  }
  stock(sysId, cid) { return this.state.market[sysId].stock[cid]; }
  canBuy(sysId, cid) { return this.sells(this.sys(sysId), cid); }
  sell(sysId, cid, qty) {
    const m = this.state.market[sysId];
    let total = 0;
    for (let i = 0; i < qty; i++) { total += this.sellPrice(sysId, cid); m.pressure[cid] += 1 / (COMM[cid].base > 100 ? 45 : 80); }
    m.stock[cid] += this.sells(this.sys(sysId), cid) ? qty : 0;
    return total;
  }
  quoteBuy(sysId, cid, qty) {
    const m = this.state.market[sysId]; const saved = m.pressure[cid];
    let total = 0;
    for (let i = 0; i < qty; i++) { total += this.buyPrice(sysId, cid); m.pressure[cid] -= 1 / 120; }
    m.pressure[cid] = saved;
    return total;
  }
  buy(sysId, cid, qty) {
    const m = this.state.market[sysId];
    let total = 0;
    for (let i = 0; i < qty; i++) { total += this.buyPrice(sysId, cid); m.pressure[cid] -= 1 / 120; }
    m.stock[cid] -= qty;
    return total;
  }
  recordIntel(sysId) {
    const prices = {};
    for (const c of COMMODITIES) prices[c.id] = { s: this.sellPrice(sysId, c.id), b: this.canBuy(sysId, c.id) ? this.buyPrice(sysId, c.id) : null };
    this.state.intel[sysId] = { day: this.state.day, prices };
  }
  daily(day) {
    const rng = new RNG(this.state.seed + day * 31);
    for (const s of this.galaxy.systems) {
      const m = this.state.market[s.id];
      for (const c of COMMODITIES) {
        m.pressure[c.id] *= 0.55;
        m.drift[c.id] = Math.min(1.16, Math.max(0.85, m.drift[c.id] + rng.range(-0.05, 0.05)));
        if (this.sells(s, c.id)) { const cap = c.base > 150 ? 60 : 140; m.stock[c.id] = Math.min(cap, m.stock[c.id] + Math.round(cap * 0.3)); }
      }
    }
  }
}

export function shipValue(ship) {
  let v = HULLS[ship.hull].price * 0.6;
  return v;
}
export function netWorth(state) {
  let w = state.credits;
  for (const s of state.ships) { w += shipValue(s); for (const k in s.cargo) w += s.cargo[k] * COMM[k].base; }
  return w;
}
export function pilotRank(state) {
  const w = netWorth(state);
  const tiers = [8000, 25000, 60000, 150000];
  let r = 0; while (r < tiers.length && w >= tiers[r]) r++;
  return r; // 0..4
}
export const RANK_NAMES = ['Drifter', 'Hauler', 'Prospector', 'Merchant Captain', 'Frontier Magnate'];
export { computeStats };
