// Measures the site's full two-core arc: handoff, periapsis, merger times.
// Faithful re-implementation of ye()/ve() from galaxy-pretty.js.
const P = 2.25; // total mass
const N = 1.25; // periapsis target
const SOFT = 0.3, SOFT2 = SOFT * SOFT;
const I = 780 / 25; // 31.2 start separation
const L = 11; // handoff separation
const V = 0.05; // merger separation
const re = 3.2, R = 0.011, zB = 12, B = 1;
const A = 1100;
const c0 = 110 / A; // 0.1
const M = 7 / (4 / 101.6); // total track time

function ve(rp, r, n) {
  const num = 2 * P * (1 / rp - 1 / r) + n * n;
  const den = (r * r) / (rp * rp) - 1;
  return Math.sqrt(Math.max(0, num / den));
}

const dt = 0.05;
const steps = Math.ceil(M / dt) + 2;
let x = I, y = 0, zz = 0;
let vx = 0, vy = 0, vz = -ve(N, I, c0);
let prev = Infinity, descending = true;
let tPeri = -1, minSep = I;
let tHandoff = Infinity, tMerge = Infinity;
const sepAt = [];
for (let i = 0; i < steps; i += 1) {
  const t = i * dt;
  const sep = Math.sqrt(x * x + y * y + zz * zz);
  sepAt.push(sep);
  if (descending && sep > prev) { descending = false; tPeri = t - dt; minSep = prev; }
  if (tHandoff === Infinity && sep <= L) tHandoff = t;
  if (tMerge === Infinity && sep <= V) { tMerge = t; }
  prev = sep;
  const sub = sep < 2 ? 48 : 8;
  const h = dt / sub;
  for (let s = 0; s < sub; s += 1) {
    const r = Math.sqrt(x * x + y * y + zz * zz);
    const den = r * r + SOFT2;
    const acc = P / (den * Math.sqrt(den));
    const rr = r / re;
    const drag = (R * (1 + zB * Math.exp(-r / B))) / (1 + rr * rr * rr);
    vx += (-x * acc - vx * drag) * h;
    vy += (-y * acc - vy * drag) * h;
    vz += (-zz * acc - vz * drag) * h;
    x += vx * h; y += vy * h; zz += vz * h;
  }
}
const sepOf = (t) => sepAt[Math.min(sepAt.length - 1, Math.round(t / dt))];
console.log('v0 =', -ve(N, I, c0).toFixed(5));
console.log('M (track length) =', M.toFixed(1));
console.log('tHandoff (sep<=11) =', tHandoff.toFixed(2), 'sep there =', sepOf(tHandoff).toFixed(3));
console.log('tPeri =', tPeri.toFixed(2), 'minSep =', minSep.toFixed(3));
console.log('tMerge (sep<=0.05) =', tMerge.toFixed(2));
console.log('handoff->peri =', (tPeri - tHandoff).toFixed(2), 'units; peri->merge =', (tMerge - tPeri).toFixed(2), 'units');
// what the CURRENT port shows at fade-in: tLive = tPeri - 4.5
console.log('sep at tPeri-4.5 (current fade-in) =', sepOf(tPeri - 4.5).toFixed(2));
// candidate fade-in points
for (const sep of [20, 16, 14, 12]) {
  let t = 0;
  while (t < M && sepAt[Math.round(t / dt)] > sep) t += dt;
  console.log(`time when sep first <= ${sep}: t=${t.toFixed(2)}`);
}
// apocenters after first periapsis (turning points of sep)
let turns = [];
for (let i = 2; i < sepAt.length - 1; i += 1) {
  const t = i * dt;
  if (t <= tPeri) continue;
  if (sepAt[i] > sepAt[i - 1] && sepAt[i] >= sepAt[i + 1]) turns.push([t, sepAt[i]]);
  if (sepAt[i] < sepAt[i - 1] && sepAt[i] <= sepAt[i + 1]) turns.push([t, sepAt[i], true]);
}
console.log('turn points after first periapsis (t, sep, isMin):');
turns.slice(0, 8).forEach(([t, s, isMin]) => console.log(`  t=${t.toFixed(2)} sep=${s.toFixed(3)}${isMin ? ' (min)' : ''}`));
