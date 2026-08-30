import { i as e } from "./rolldown-runtime-aKtaBQYM.js";
import { t } from "./react-lCSYwAWP.js";
import { t as n } from "./jsx-runtime-DKdBMi_L.js";
import { t as r } from "./ArrowCounterClockwise.es-Pc_pbvvF.js";
import { a as i, r as a } from "./GuideTour-BbEt2iAy.js";
import { t as o } from "./Freebar-Cd5Vg9mT.js";
import { t as s } from "./GhostHint-BsCXDIdq.js";
import { t as c } from "./FilmStrip.es-DmfFMceB.js";
import { t as l } from "./Pause.es-krNW0sCC.js";
import { t as u } from "./Play.es-y3QJ40-i.js";
import { t as d } from "./X.es-C9Ie3YbH.js";
import {
  Gn as f,
  Hn as p,
  Tr as m,
  bt as h,
  er as g,
  g as _,
  h as v,
  un as y,
  vt as b,
  w as x,
  y as S,
  zt as C,
} from "./three.module-CiyACbS_.js";
import { n as w } from "./experience-D_vq87Rw.js";
import { t as T } from "./useStoryFreeMode-C4Ar5Ir7.js";
import { t as E } from "./motion-Cfqfo9PV.js";
import { a as D, r as ee, t as te } from "./react-three-fiber.esm-BjSECw86.js";
import { t as O } from "./Stars-CVBGSZMz.js";
var k = e(t(), 1),
  A = 1100,
  j = 4 / 101.6,
  M = 7 / j,
  N = 1.25,
  P = 2.25,
  ne = 0.3,
  F = ne * ne,
  I = 780 / 25,
  L = 11,
  re = 3.2,
  R = 0.011,
  z = 12,
  B = 1,
  V = 0.05,
  H = 0.06,
  U = 100,
  ie = 4,
  ae = 0.16,
  W = 1.3,
  oe = 0.42,
  G = 0.24,
  K = 1.42,
  se = 0.6,
  ce = Math.tan((15 * Math.PI) / 180),
  le = 0.46,
  ue = { mode: `grazing`, approachKmS: 110 };
function de(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) | 0;
    let e = Math.imul(t ^ (t >>> 15), 1 | t);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function fe(e) {
  return (e() + e() + e() + e() - 2) * 0.86;
}
function pe(e, t) {
  let n = t * t + F;
  return Math.sqrt((e * t * t) / (n * Math.sqrt(n)));
}
function me(e, t, n, r) {
  for (let i = 0; i < 48; i += 1) {
    let i = t + (n - t) * e();
    if (e() < (i / r) * Math.exp(1 - i / r)) return i;
  }
  return t + (n - t) * e();
}
function he(e, t) {
  let n = (e * Math.PI) / 180,
    r = (t * Math.PI) / 180,
    i = Math.cos(n),
    a = Math.sin(n),
    o = Math.cos(r),
    s = Math.sin(r);
  return new Float64Array([o, s * a, s * i, 0, i, -a, -s, o * a, o * i]);
}
function ge(e, t, n, r, i) {
  ((i[0] = e[0] * t + e[1] * n + e[2] * r),
    (i[1] = e[3] * t + e[4] * n + e[5] * r),
    (i[2] = e[6] * t + e[7] * n + e[8] * r));
}
var _e = {
  grazing: {
    periapsis: 1.25,
    inc1: 16,
    node1: 14,
    inc2: 32,
    node2: -34,
    spin: 1,
  },
  "head-on": {
    periapsis: 0.24,
    inc1: 36,
    node1: 22,
    inc2: 68,
    node2: -42,
    spin: 1,
  },
  retrograde: {
    periapsis: 1.25,
    inc1: 16,
    node1: 14,
    inc2: 32,
    node2: -34,
    spin: -1,
  },
};
function ve(e, t, n) {
  let r = 2 * P * (1 / e - 1 / t) + n * n,
    i = (t * t) / (e * e) - 1;
  return Math.sqrt(Math.max(0, r / i));
}
function ye(e, t = M) {
  let n = _e[e.mode],
    r = 0.05,
    i = Math.ceil(t / r) + 2,
    a = new Float32Array(i * 3),
    o = new Float32Array(i * 3),
    s = new Float32Array(i),
    c = e.approachKmS / A,
    l = I,
    u = 0,
    d = 0,
    f = -c,
    p = 0,
    m = -ve(n.periapsis, I, c),
    h = 0,
    g = I,
    _ = 1 / 0,
    v = 1 / 0,
    y = !1,
    b = I,
    x = !0;
  for (let e = 0; e < i; e += 1) {
    let t = e * r,
      n = Math.sqrt(l * l + u * u + d * d);
    if (
      ((a[e * 3] = l),
      (a[e * 3 + 1] = u),
      (a[e * 3 + 2] = d),
      (o[e * 3] = f),
      (o[e * 3 + 1] = p),
      (o[e * 3 + 2] = m),
      (s[e] = n),
      x && n > b && ((x = !1), (h = t - r), (g = b)),
      (b = n),
      _ === 1 / 0 && n <= L && (_ = t),
      !y && n <= V && ((y = !0), (v = t), x && ((x = !1), (h = t), (g = n))),
      y)
    ) {
      ((l = 0), (u = 0), (d = 0), (f = 0), (p = 0), (m = 0));
      continue;
    }
    let i = n < 2 ? 48 : 8,
      c = r / i;
    for (let e = 0; e < i; e += 1) {
      let e = Math.sqrt(l * l + u * u + d * d),
        t = e * e + F,
        n = P / (t * Math.sqrt(t)),
        r = e / re,
        i = (R * (1 + z * Math.exp(-e / B))) / (1 + r * r * r);
      ((f += (-l * n - f * i) * c),
        (p += (-u * n - p * i) * c),
        (m += (-d * n - m * i) * c),
        (l += f * c),
        (u += p * c),
        (d += m * c));
    }
  }
  return {
    dt: r,
    count: i,
    rel: a,
    relV: o,
    sep: s,
    tPeri: h,
    minSep: g,
    tHandoff: _,
    tMerge: v,
  };
}
var be = {
    x1: 0,
    y1: 0,
    z1: 0,
    x2: 0,
    y2: 0,
    z2: 0,
    vx1: 0,
    vy1: 0,
    vz1: 0,
    vx2: 0,
    vy2: 0,
    vz2: 0,
    sep: 0,
  },
  q = -1.25 / P,
  J = 1 / P;
function Y(e, t, n = be) {
  let r = Math.min(Math.max(t, 0) / e.dt, e.count - 1.001),
    i = Math.floor(r),
    a = r - i,
    o = i * 3,
    s = (i + 1) * 3,
    c = e.rel[o] + (e.rel[s] - e.rel[o]) * a,
    l = e.rel[o + 1] + (e.rel[s + 1] - e.rel[o + 1]) * a,
    u = e.rel[o + 2] + (e.rel[s + 2] - e.rel[o + 2]) * a,
    d = e.relV[o] + (e.relV[s] - e.relV[o]) * a,
    f = e.relV[o + 1] + (e.relV[s + 1] - e.relV[o + 1]) * a,
    p = e.relV[o + 2] + (e.relV[s + 2] - e.relV[o + 2]) * a;
  return (
    (n.x1 = q * c),
    (n.y1 = q * l),
    (n.z1 = q * u),
    (n.x2 = J * c),
    (n.y2 = J * l),
    (n.z2 = J * u),
    (n.vx1 = q * d),
    (n.vy1 = q * f),
    (n.vz1 = q * p),
    (n.vx2 = J * d),
    (n.vy2 = J * f),
    (n.vz2 = J * p),
    (n.sep = Math.sqrt(c * c + l * l + u * u)),
    n
  );
}
var xe = [
  { core: [1, 0.86, 0.62], edge: [0.86, 0.86, 0.78] },
  { core: [1, 0.92, 0.82], edge: [0.55, 0.68, 1] },
];
function Se(e, t, n, r, i) {
  let a = xe[e],
    o = Math.min(1, Math.max(0, t)),
    s = o * o * (3 - 2 * o);
  ((r[i] = Math.min(1.2, (a.core[0] + (a.edge[0] - a.core[0]) * s) * n)),
    (r[i + 1] = Math.min(1.2, (a.core[1] + (a.edge[1] - a.core[1]) * s) * n)),
    (r[i + 2] = Math.min(1.2, (a.core[2] + (a.edge[2] - a.core[2]) * s) * n)));
}
function Ce(e, t, n = 20260726) {
  let r = de(n),
    i = e + t,
    a = {
      n: i,
      nStar: e,
      pos: new Float32Array(i * 3),
      vel: new Float32Array(i * 3),
      host: new Uint8Array(i),
      r0: new Float32Array(i),
      th0: new Float32Array(i),
      z0: new Float32Array(i),
      ign: new Float32Array(i).fill(-1),
      color: new Float32Array(i * 3),
      size: new Float32Array(i),
      seed: new Float32Array(i),
      sunIndex: 0,
    },
    o = 1 / 0;
  for (let t = 0; t < e; t += 1) {
    let e = t % 2,
      n =
        r() < 0.26 ? Math.sqrt(0.66 + r() * (W * W - 0.66)) : me(r, ae, W, oe),
      i;
    if (n > le && r() > 0.26) {
      let e = r() < 0.5 ? 0 : 1;
      i = Math.log(n / le) / ce + e * Math.PI + fe(r) * 0.34;
    } else i = r() * Math.PI * 2;
    let s = n < 0.3;
    if (
      ((a.host[t] = e),
      (a.r0[t] = n),
      (a.th0[t] = i),
      (a.z0[t] = fe(r) * (s ? 0.11 : 0.028 * (1 + n))),
      (a.seed[t] = r()),
      Se(e, (n - ae) / (W - ae), 0.82 + r() * 0.34, a.color, t * 3),
      (a.size[t] = (s ? 1.3 : n > 0.78 ? 1.5 : 1) * (0.62 + r() * 0.62)),
      e === 0)
    ) {
      let e = Math.abs(n - 8.2 / 25);
      e < o && ((o = e), (a.sunIndex = t));
    }
  }
  for (let n = 0; n < t; n += 1) {
    let t = e + n,
      i = n % 2,
      o = me(r, G, K, se);
    ((a.host[t] = i),
      (a.r0[t] = o),
      (a.th0[t] = r() * Math.PI * 2),
      (a.z0[t] = fe(r) * 0.018 * (1 + o)),
      (a.seed[t] = r()));
    let s = 0.8 + r() * 0.4;
    ((a.color[t * 3] = 0.2 * s),
      (a.color[t * 3 + 1] = 0.3 * s),
      (a.color[t * 3 + 2] = 0.46 * s),
      (a.size[t] = 1.5 + r() * 1.4));
  }
  return a;
}
var we = 44,
  Te = 22,
  Ee = 44,
  De = 0.34,
  Oe = we * Te * Ee,
  ke = 3,
  Ae = 8.2 / 25,
  je = 30 / 25;
function Me(e) {
  let { set: t } = e,
    n = [];
  for (
    let e = 0;
    e < t.nStar &&
    !(
      t.host[e] === 0 &&
      (Math.abs(t.r0[e] - Ae) < 0.035 && n.push(e), n.length >= 72)
    );
    e += 1
  );
  if (n.length === 0) return;
  let r = Math.min(M, (e.track.tMerge === 1 / 0 ? M : e.track.tMerge) + 20),
    i = n.length,
    a = new Float64Array(i * 3),
    o = new Float64Array(i * 3),
    s = e.track.tHandoff,
    c = Y(e.track, s),
    l = [0, 0, 0];
  for (let r = 0; r < i; r += 1) {
    let i = n[r],
      u = t.r0[i],
      d = t.th0[i] + Fe(e, u, 0, s);
    (ge(e.orient[0], u * Math.cos(d), t.z0[i], u * Math.sin(d), l),
      (a[r * 3] = c.x1 + l[0]),
      (a[r * 3 + 1] = c.y1 + l[1]),
      (a[r * 3 + 2] = c.z1 + l[2]));
    let f = pe(1, u) * e.spin[0];
    (ge(e.orient[0], -Math.sin(d) * f, 0, Math.cos(d) * f, l),
      (o[r * 3] = c.vx1 + l[0]),
      (o[r * 3 + 1] = c.vy1 + l[1]),
      (o[r * 3 + 2] = c.vz1 + l[2]));
  }
  let u = H * 0.5;
  for (let t = s; t < r; t += H) {
    let n = Y(e.track, t + u);
    for (let e = 0; e < i; e += 1) {
      let t = e * 3,
        r = a[t] + o[t] * u,
        i = a[t + 1] + o[t + 1] * u,
        s = a[t + 2] + o[t + 2] * u,
        c = n.x1 - r,
        l = n.y1 - i,
        d = n.z1 - s,
        f = c * c + l * l + d * d + F,
        p = 1 / (f * Math.sqrt(f)),
        m = c * p,
        h = l * p,
        g = d * p;
      ((c = n.x2 - r),
        (l = n.y2 - i),
        (d = n.z2 - s),
        (f = c * c + l * l + d * d + F),
        (p = N / (f * Math.sqrt(f))),
        (m += c * p),
        (h += l * p),
        (g += d * p),
        (o[t] += m * H),
        (o[t + 1] += h * H),
        (o[t + 2] += g * H),
        (a[t] = r + o[t] * u),
        (a[t + 1] = i + o[t + 1] * u),
        (a[t + 2] = s + o[t + 2] * u));
    }
  }
  let d = Y(e.track, r),
    f = (d.x1 + d.x2) * 0.5,
    p = (d.y1 + d.y2) * 0.5,
    m = (d.z1 + d.z2) * 0.5,
    h = n[0],
    g = 1 / 0;
  for (let e = 0; e < i; e += 1) {
    let t = Math.hypot(a[e * 3] - f, a[e * 3 + 1] - p, a[e * 3 + 2] - m),
      r = Math.abs(t - je);
    r < g && ((g = r), (h = n[e]));
  }
  t.sunIndex = h;
}
function Ne(e, t, n) {
  let r = ye(e),
    i = Ce(t, n),
    a = _e[e.mode],
    o = {
      cfg: e,
      track: r,
      set: i,
      orient: [he(a.inc1, a.node1), he(a.inc2, a.node2)],
      spin: [a.spin, a.spin],
      patternOmega: pe(1, 0.7) / 0.7,
      t: 0,
      live: !1,
      checkpoints: [],
      stepsSinceCheckpoint: 0,
      ignited: 0,
      sunTrail: [],
      sunTrailT: [],
      gridA: new Int16Array(Oe),
      gridB: new Int16Array(Oe),
    };
  return (Me(o), Ie(o, 0), o);
}
var Pe = 6;
function Fe(e, t, n, r) {
  let i = pe(n === 0 ? 1 : N, t) / Math.max(t, 1e-4),
    a = e.track.tHandoff,
    o = a - Pe,
    s = e.patternOmega * r;
  if (r > o) {
    let t = Math.min(r, a) - o;
    s += (i - e.patternOmega) * ((t * t) / (2 * Pe));
  }
  return e.spin[n] * s;
}
function Ie(e, t) {
  let { set: n } = e,
    r = Y(e.track, t),
    i = [0, 0, 0];
  for (let a = 0; a < n.n; a += 1) {
    let o = n.host[a],
      s = n.r0[a],
      c = n.th0[a] + Fe(e, s, o, t);
    ge(e.orient[o], s * Math.cos(c), n.z0[a], s * Math.sin(c), i);
    let l = o === 0 ? r.x1 : r.x2,
      u = o === 0 ? r.y1 : r.y2,
      d = o === 0 ? r.z1 : r.z2;
    ((n.pos[a * 3] = l + i[0]),
      (n.pos[a * 3 + 1] = u + i[1]),
      (n.pos[a * 3 + 2] = d + i[2]));
  }
  ((e.t = t), (e.live = !1));
}
function Le(e) {
  let t = e.track.tHandoff;
  Ie(e, t);
  let { set: n } = e,
    r = Y(e.track, t),
    i = [0, 0, 0];
  for (let a = 0; a < n.n; a += 1) {
    let o = n.host[a],
      s = n.r0[a],
      c = n.th0[a] + Fe(e, s, o, t),
      l = pe(o === 0 ? 1 : N, s) * e.spin[o];
    (ge(e.orient[o], -Math.sin(c) * l, 0, Math.cos(c) * l, i),
      (n.vel[a * 3] = (o === 0 ? r.vx1 : r.vx2) + i[0]),
      (n.vel[a * 3 + 1] = (o === 0 ? r.vy1 : r.vy2) + i[1]),
      (n.vel[a * 3 + 2] = (o === 0 ? r.vz1 : r.vz2) + i[2]),
      (n.ign[a] = -1));
  }
  ((e.live = !0),
    (e.ignited = 0),
    (e.checkpoints = []),
    (e.stepsSinceCheckpoint = 0),
    (e.sunTrail = []),
    (e.sunTrailT = []),
    Re(e));
}
function Re(e) {
  (e.checkpoints.push({
    t: e.t,
    pos: e.set.pos.slice(),
    vel: e.set.vel.slice(),
    ign: e.set.ign.slice(),
    ignited: e.ignited,
  }),
    (e.stepsSinceCheckpoint = 0));
}
function ze(e, t) {
  for (
    e.set.pos.set(t.pos),
      e.set.vel.set(t.vel),
      e.set.ign.set(t.ign),
      e.ignited = t.ignited,
      e.t = t.t,
      e.live = !0,
      e.stepsSinceCheckpoint = 0;
    e.sunTrailT.length > 0 && e.sunTrailT[e.sunTrailT.length - 1] > t.t;
  )
    (e.sunTrailT.pop(), (e.sunTrail.length -= 3));
}
function Be(e) {
  let { set: t, gridA: n, gridB: r } = e,
    i = Y(e.track, e.t);
  if (i.sep > 9) return;
  (n.fill(0), r.fill(0));
  let a = (i.x1 + i.x2) * 0.5,
    o = (i.y1 + i.y2) * 0.5,
    s = (i.z1 + i.z2) * 0.5,
    c = (e, t, n) => {
      let r = Math.floor((e - a) / De) + we / 2;
      if (r < 0 || r >= we) return -1;
      let i = Math.floor((t - o) / De) + Te / 2;
      if (i < 0 || i >= Te) return -1;
      let c = Math.floor((n - s) / De) + Ee / 2;
      return c < 0 || c >= Ee ? -1 : (i * Ee + c) * we + r;
    };
  for (let e = t.nStar; e < t.n; e += 1) {
    let i = c(t.pos[e * 3], t.pos[e * 3 + 1], t.pos[e * 3 + 2]);
    i < 0 || (t.host[e] === 0 ? (n[i] += 1) : (r[i] += 1));
  }
  for (let i = t.nStar; i < t.n; i += 1) {
    if (t.ign[i] >= 0) continue;
    let a = c(t.pos[i * 3], t.pos[i * 3 + 1], t.pos[i * 3 + 2]);
    a < 0 ||
      ((t.host[i] === 0 ? r[a] : n[a]) >= ke &&
        ((t.ign[i] = e.t), (e.ignited += 1)));
  }
}
var Ve = 0.02,
  He = 16;
function Ue(e) {
  let t = e.sunTrailT.length;
  if (t > 0 && e.t - e.sunTrailT[t - 1] < Ve) return;
  let n = e.set.sunIndex * 3;
  (e.sunTrailT.push(e.t),
    e.sunTrail.push(e.set.pos[n], e.set.pos[n + 1], e.set.pos[n + 2]),
    e.sunTrailT.length > He && (e.sunTrailT.shift(), e.sunTrail.splice(0, 3)));
}
function We(e, t) {
  let { set: n } = e,
    { pos: r, vel: i } = n,
    a = n.n,
    o = H * 0.5;
  for (let n = 0; n < t; n += 1) {
    let { x1: t, y1: n, z1: s, x2: c, y2: l, z2: u } = Y(e.track, e.t + o);
    for (let e = 0; e < a; e += 1) {
      let a = e * 3,
        d = r[a] + i[a] * o,
        f = r[a + 1] + i[a + 1] * o,
        p = r[a + 2] + i[a + 2] * o,
        m = t - d,
        h = n - f,
        g = s - p,
        _ = m * m + h * h + g * g + F,
        v = 1 / (_ * Math.sqrt(_)),
        y = m * v,
        b = h * v,
        x = g * v;
      ((m = c - d),
        (h = l - f),
        (g = u - p),
        (_ = m * m + h * h + g * g + F),
        (v = N / (_ * Math.sqrt(_))),
        (y += m * v),
        (b += h * v),
        (x += g * v));
      let S = i[a] + y * H,
        C = i[a + 1] + b * H,
        w = i[a + 2] + x * H;
      ((i[a] = S),
        (i[a + 1] = C),
        (i[a + 2] = w),
        (d += S * o),
        (f += C * o),
        (p += w * o),
        (r[a] = d),
        (r[a + 1] = f),
        (r[a + 2] = p));
    }
    ((e.t += H),
      (e.stepsSinceCheckpoint += 1),
      e.stepsSinceCheckpoint % ie === 0 && Be(e),
      Ue(e),
      e.stepsSinceCheckpoint >= U && Re(e));
  }
}
function Ge(e, t, n) {
  let r = Math.min(Math.max(t, 0), M);
  if (r < e.track.tHandoff - 1e-6) return (Ie(e, r), !0);
  if ((e.live || Le(e), e.t > r + 0.06 * 0.5)) {
    let t = null;
    for (let n of e.checkpoints)
      n.t <= r + 1e-6 && (!t || n.t > t.t) && (t = n);
    t ? ze(e, t) : Le(e);
  }
  let i = Math.floor((r - e.t) / H + 1e-6);
  if (i <= 0) return !0;
  let a = Math.min(i, n);
  return (We(e, a), a >= i);
}
function Ke(e, t) {
  e.track = ye(t);
  let n = _e[t.mode];
  return (
    (e.cfg = t),
    (e.orient = [he(n.inc1, n.node1), he(n.inc2, n.node2)]),
    (e.spin = [n.spin, n.spin]),
    (e.checkpoints = []),
    (e.ignited = 0),
    (e.sunTrail = []),
    (e.sunTrailT = []),
    (e.live = !1),
    e.set.ign.fill(-1),
    Me(e),
    Ie(e, 0),
    e
  );
}
var X = (e) => e * j,
  qe = (e) => e / j;
function Je(e) {
  let t = Y(e.track, e.t),
    n = e.set.sunIndex * 3,
    r = t.sep < 0.6 ? (t.x1 + t.x2) * 0.5 : t.x1,
    i = t.sep < 0.6 ? (t.y1 + t.y2) * 0.5 : t.y1,
    a = t.sep < 0.6 ? (t.z1 + t.z2) * 0.5 : t.z1;
  return (
    Math.hypot(e.set.pos[n] - r, e.set.pos[n + 1] - i, e.set.pos[n + 2] - a) *
    25
  );
}
var Z = n(),
  Ye = 2.1,
  Xe = 2,
  Q = (e, t, n) => Math.min(n, Math.max(t, e)),
  $ = (e, t, n, r) => e + (t - e) * (1 - Math.exp(-n * r));
function Ze(e, t, n, r) {
  let i = t - e;
  for (; i > Math.PI; ) i -= Math.PI * 2;
  for (; i < -Math.PI; ) i += Math.PI * 2;
  return e + i * (1 - Math.exp(-n * r));
}
function Qe() {
  let e = document.createElement(`canvas`);
  ((e.width = 128), (e.height = 128));
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(128 / 2, 128 / 2, 0, 128 / 2, 128 / 2, 128 / 2);
  (n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.16, `rgba(255,255,255,0.62)`),
    n.addColorStop(0.42, `rgba(255,255,255,0.16)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 128, 128));
  let r = new S(e);
  return ((r.colorSpace = p), r);
}
var $e = `
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aSeed;
  attribute float aHost;
  attribute float aKind;
  attribute float aAge;

  uniform float uTime;
  uniform float uScale;
  uniform float uRedden;
  uniform float uHostTint;
  uniform float uGasLevel;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 col = aColor;
    float alpha = 1.0;
    float size = aSize;

    if (aKind > 0.5) {
      if (aAge < 0.0) {
        // (shader note)
        alpha = 0.34 * uGasLevel;
        size = aSize * 1.7;
      } else {
        // (shader note)
        float young = smoothstep(0.0, 0.8, aAge) * (1.0 - smoothstep(1.5, 9.0, aAge));
        col = mix(vec3(0.68, 0.82, 1.0), vec3(1.0, 0.78, 0.54), smoothstep(2.0, 16.0, aAge));
        alpha = 0.22 * uGasLevel + young * 1.5 * uGasLevel;
        size = aSize * (0.8 + 1.9 * young);
      }
    } else {
      // (shader note)
      col = mix(col, vec3(1.0, 0.74, 0.50), uRedden * 0.5);
      vec3 ident = aHost < 0.5 ? vec3(1.0, 0.70, 0.36) : vec3(0.44, 0.66, 1.0);
      col = mix(col, ident, uHostTint);
    }

    float tw = 0.88 + 0.12 * sin(uTime * (0.6 + aSeed * 1.7) + aSeed * 43.0);
    vColor = col * tw;
    vAlpha = alpha;

    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(size * uScale / max(0.4, -mv.z), 1.6, 15.0);
  }
`,
  et = `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float core = smoothstep(0.5, 0.0, d);
    float i = pow(core, 1.9) * 0.5 + core * 0.05;
    gl_FragColor = vec4(vColor, i * vAlpha);
  }
`,
  tt = `
  uniform float uRadius;
  varying vec2 vLocal;
  void main() {
    // (shader note)
    vLocal = vec2(uv.x - 0.5, 0.5 - uv.y) * 2.0 * uRadius;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  nt = `
  uniform float uArm;
  uniform float uBody;
  uniform float uRadius;
  uniform float uPhase;
  uniform vec3 uCore;
  uniform vec3 uEdge;
  varying vec2 vLocal;

  void main() {
    float r = length(vLocal);
    if (r > uRadius) discard;
    // (shader note)
    float ang = atan(vLocal.y, vLocal.x) - uPhase;
    float armPhase = log(max(r, 0.08) / 0.46) / 0.26795;
    float band = max(0.0, cos(2.0 * (ang - armPhase)));

    float disk = exp(-r / 0.42);
    float arm = pow(band, 3.0) * smoothstep(0.20, 0.50, r) * exp(-r / 0.70);
    float core = exp(-r / 0.115);
    float edge = smoothstep(uRadius, uRadius * 0.55, r);

    float v = (disk * 0.44 + arm * uArm * 1.05 + core * 1.25) * uBody * edge;
    vec3 col = mix(uCore, uEdge, smoothstep(0.08, 0.85, r));
    gl_FragColor = vec4(col * v, 1.0);
  }
`;
function rt(e, t, n) {
  let r = Y(t.track, t.t),
    i = (r.x1 + r.x2) * 0.5,
    a = (r.y1 + r.y2) * 0.5,
    o = (r.z1 + r.z2) * 0.5;
  switch (e) {
    case `approach`: {
      let e = r.x2 - r.x1,
        t = r.y2 - r.y1,
        i = r.z2 - r.z1,
        a = Math.max(1e-4, Math.hypot(e, t, i));
      return {
        tx: r.x1 + (e / a) * 2.4,
        ty: r.y1 + (t / a) * 2.4,
        tz: r.z1 + (i / a) * 2.4,
        dist: 7.6,
        elev: 0.32,
        azi: n + 2.5,
      };
    }
    case `wide`:
      return {
        tx: i,
        ty: a,
        tz: o,
        dist: Q(6 + 2.3 * r.sep, 10, 22),
        elev: 1.06,
        azi: n + Math.PI / 2,
      };
    case `contact`:
      return {
        tx: i,
        ty: a,
        tz: o,
        dist: 3.5,
        elev: 0.26,
        azi: n + Math.PI / 2,
      };
    case `burst`:
      return { tx: i, ty: a, tz: o, dist: 6.6, elev: 0.62, azi: n + 1.85 };
    default:
      return {
        tx: i,
        ty: a,
        tz: o,
        dist: 11.5,
        elev: 0.55,
        azi: n + 1.4 + t.t * 0.004,
      };
  }
}
function it({ rtRef: e, view: t, onSample: n, reducedMotion: r, dragRef: i }) {
  let a = (0, k.useMemo)(() => Qe(), []);
  (0, k.useEffect)(() => () => a.dispose(), [a]);
  let o = e.current.set,
    s = (0, k.useMemo)(() => {
      let e = o.nStar * Xe + (o.n - o.nStar),
        t = new Float32Array(e * 3),
        n = new Float32Array(e * 3),
        r = new Float32Array(e),
        i = new Float32Array(e),
        a = new Float32Array(e),
        s = new Float32Array(e),
        c = new Float32Array(e).fill(-1),
        l = new Int32Array(e),
        u = new Float32Array(e * 3),
        d = 0;
      for (let e = 0; e < o.n; e += 1) {
        let t = e < o.nStar ? Xe : 1;
        for (let c = 0; c < t; c += 1) {
          if (
            ((l[d] = e),
            (n[d * 3] = o.color[e * 3]),
            (n[d * 3 + 1] = o.color[e * 3 + 1]),
            (n[d * 3 + 2] = o.color[e * 3 + 2]),
            (r[d] = o.size[e] * (c === 0 ? 1 : 0.78)),
            (i[d] = (o.seed[e] + c * 0.41) % 1),
            (a[d] = o.host[e]),
            (s[d] = e < o.nStar ? 0 : 1),
            c > 0)
          ) {
            let t = o.seed[e] * 6.283 + c,
              n = 0.018 + o.seed[e] * 0.022;
            ((u[d * 3] = Math.cos(t) * n),
              (u[d * 3 + 1] = (o.seed[e] - 0.5) * 0.02),
              (u[d * 3 + 2] = Math.sin(t) * n));
          }
          d += 1;
        }
      }
      return {
        renderCount: e,
        position: t,
        aColor: n,
        aSize: r,
        aSeed: i,
        aHost: a,
        aKind: s,
        aAge: c,
        src: l,
        jitter: u,
      };
    }, [o]),
    c = (0, k.useMemo)(() => {
      let e = new _();
      return (
        e.setAttribute(`position`, new v(s.position, 3)),
        e.setAttribute(`aColor`, new v(s.aColor, 3)),
        e.setAttribute(`aSize`, new v(s.aSize, 1)),
        e.setAttribute(`aSeed`, new v(s.aSeed, 1)),
        e.setAttribute(`aHost`, new v(s.aHost, 1)),
        e.setAttribute(`aKind`, new v(s.aKind, 1)),
        e.setAttribute(`aAge`, new v(s.aAge, 1)),
        (e.boundingSphere = new g(new m(), 400)),
        e
      );
    }, [s]);
  (0, k.useEffect)(() => () => c.dispose(), [c]);
  let l = (0, k.useMemo)(
    () =>
      new f({
        uniforms: {
          uTime: { value: 0 },
          uScale: { value: 26 },
          uRedden: { value: 0 },
          uHostTint: { value: 0 },
          uGasLevel: { value: 0.85 },
        },
        vertexShader: $e,
        fragmentShader: et,
        transparent: !0,
        blending: 2,
        depthWrite: !1,
        depthTest: !1,
      }),
    [],
  );
  (0, k.useEffect)(() => () => l.dispose(), [l]);
  let u = (0, k.useMemo)(() => {
      let e = new _();
      return (
        e.setAttribute(`position`, new v(new Float32Array(48), 3)),
        e.setAttribute(`color`, new v(new Float32Array(48), 3)),
        e.setDrawRange(0, 0),
        (e.boundingSphere = new g(new m(), 400)),
        e
      );
    }, []),
    d = (0, k.useMemo)(
      () =>
        new b(
          u,
          new h({
            vertexColors: !0,
            transparent: !0,
            opacity: 0.9,
            blending: 2,
            depthWrite: !1,
            depthTest: !1,
          }),
        ),
      [u],
    );
  (0, k.useEffect)(
    () => () => {
      (u.dispose(), d.material.dispose());
    },
    [u, d],
  );
  let p = (0, k.useRef)([null, null]),
    S = (0, k.useRef)([null, null]),
    w = (0, k.useRef)(null),
    T = (0, k.useRef)(null),
    E = (0, k.useRef)({
      azi: 0,
      elev: 0.34,
      dist: 9,
      tx: 0,
      ty: 0,
      tz: 0,
      ready: !1,
    }),
    D = (0, k.useRef)(0),
    te = 1.45,
    A = (0, k.useMemo)(
      () =>
        [
          { core: `#ffdca6`, edge: `#cbd6ec` },
          { core: `#f2f6ff`, edge: `#6f9bff` },
        ].map(
          (e) =>
            new f({
              uniforms: {
                uArm: { value: 1 },
                uBody: { value: 1 },
                uRadius: { value: te },
                uPhase: { value: 0 },
                uCore: { value: new x(e.core) },
                uEdge: { value: new x(e.edge) },
              },
              vertexShader: tt,
              fragmentShader: nt,
              transparent: !0,
              blending: 2,
              depthWrite: !1,
              depthTest: !1,
              side: 2,
            }),
        ),
      [],
    );
  (0, k.useEffect)(() => () => A.forEach((e) => e.dispose()), [A]);
  let j = (0, k.useMemo)(() => [new y(), new y()], []),
    N = (0, k.useMemo)(() => new C(), []);
  ee((a, o) => {
    let d = Math.min(o, 0.06),
      f = e.current,
      m = f.track;
    if (t.playing) {
      let e = f.t,
        n = e < m.tHandoff - 6 ? 5.2 : e < m.tMerge + 14 ? 1.35 : 2.6;
      t.goal = Math.min(M, t.ceiling, t.goal + d * n * t.rate);
    }
    let h = t.goal - t.target;
    if (Math.abs(h) > 1e-4)
      if (t.glide) {
        let e = Math.max(2.5, Math.abs(h) / Ye);
        ((t.target += Math.sign(h) * Math.min(Math.abs(h), e * d)),
          Math.abs(t.goal - t.target) < 1e-4 && (t.glide = !1));
      } else t.target = t.goal;
    let g = t.target - f.t > 12 * 0.06 ? 60 : 10;
    Ge(f, t.target, g) || ((t.target = f.t), t.glide || (t.goal = f.t));
    let { position: _, aAge: v, src: y, jitter: b } = s,
      x = f.set.pos,
      C = f.set.ign,
      ee = f.set.nStar;
    for (let e = 0; e < s.renderCount; e += 1) {
      let t = y[e],
        n = t * 3,
        r = e * 3;
      ((_[r] = x[n] + b[r]),
        (_[r + 1] = x[n + 1] + b[r + 1]),
        (_[r + 2] = x[n + 2] + b[r + 2]),
        t >= ee && (v[e] = C[t] < 0 ? -1 : f.t - C[t]));
    }
    let te = c.getAttribute(`position`);
    te.needsUpdate = !0;
    let O = c.getAttribute(`aAge`);
    O.needsUpdate = !0;
    let k = f.t >= m.tMerge,
      P = Q((f.t - m.tMerge) / 26, 0, 1);
    ((l.uniforms.uTime.value = r ? 0 : a.clock.elapsedTime),
      (l.uniforms.uRedden.value = P),
      (l.uniforms.uHostTint.value = $(
        l.uniforms.uHostTint.value,
        t.hostTint,
        3.4,
        d,
      )),
      (l.uniforms.uGasLevel.value = $(
        l.uniforms.uGasLevel.value,
        t.gasLevel,
        3.4,
        d,
      )));
    let ne = a.size.height * a.viewport.dpr;
    l.uniforms.uScale.value =
      ((ne * 0.5) / Math.tan((42 * Math.PI) / 360)) * 0.0205;
    let F = Y(m, f.t),
      I = p.current[0],
      L = p.current[1];
    (I && I.position.set(F.x1, F.y1, F.z1),
      L && L.position.set(F.x2, F.y2, F.z2));
    let re = 1 - Q((f.t - (m.tPeri - 7)) / 11, 0, 1),
      R = 1 - Q((f.t - (m.tPeri - 4)) / 14, 0, 1);
    for (let e = 0; e < 2; e += 1) {
      let t = S.current[e],
        n = A[e];
      if (
        ((n.uniforms.uArm.value = re),
        (n.uniforms.uBody.value = R),
        (n.uniforms.uPhase.value = f.spin[e] * f.patternOmega * f.t),
        !t)
      )
        continue;
      ((t.visible = R > 0.004),
        t.position.set(
          e === 0 ? F.x1 : F.x2,
          e === 0 ? F.y1 : F.y2,
          e === 0 ? F.z1 : F.z2,
        ));
      let r = f.orient[e];
      (N.set(
        r[0],
        r[1],
        r[2],
        0,
        r[3],
        r[4],
        r[5],
        0,
        r[6],
        r[7],
        r[8],
        0,
        0,
        0,
        0,
        1,
      ),
        j[e].setFromRotationMatrix(N),
        t.quaternion.copy(j[e]));
    }
    if (w.current) {
      let e = 3.4 + Q((f.t - m.tMerge) / 22, 0, 1) * 4.2;
      (w.current.position.set(
        (F.x1 + F.x2) * 0.5,
        (F.y1 + F.y2) * 0.5,
        (F.z1 + F.z2) * 0.5,
      ),
        w.current.scale.set(e, e, 1));
      let t = w.current.material;
      ((t.opacity = 0.2 * Q((f.t - m.tMerge + 10) / 18, 0, 1)),
        (w.current.visible = t.opacity > 0.005));
    }
    let z = f.set.sunIndex * 3;
    if (T.current) {
      T.current.position.set(x[z], x[z + 1], x[z + 2]);
      let e = 0.15 + t.sunFocus * 0.2;
      (T.current.scale.set(e, e, 1),
        (T.current.material.opacity = 0.55 + t.sunFocus * 0.45));
    }
    let B = u.getAttribute(`position`),
      V = u.getAttribute(`color`),
      H = f.sunTrail,
      U = Math.min(16, H.length / 3),
      ie = H.length / 3 - U,
      ae = 0.12 + t.sunFocus * 0.5;
    for (let e = 0; e < U; e += 1) {
      ((B.array[e * 3] = H[(ie + e) * 3]),
        (B.array[e * 3 + 1] = H[(ie + e) * 3 + 1]),
        (B.array[e * 3 + 2] = H[(ie + e) * 3 + 2]));
      let t = (e / Math.max(1, U - 1)) ** 2.2 * ae;
      ((V.array[e * 3] = t),
        (V.array[e * 3 + 1] = t * 0.68),
        (V.array[e * 3 + 2] = t * 0.28));
    }
    ((B.needsUpdate = !0), (V.needsUpdate = !0), u.setDrawRange(0, U));
    let W = Math.atan2(F.z2 - F.z1, F.x2 - F.x1),
      oe;
    oe =
      t.framing === `auto`
        ? f.t >= m.tMerge - 8
          ? `remnant`
          : F.sep > 16
            ? `approach`
            : `wide`
        : t.framing;
    let G = rt(oe, f, W),
      K = i.current;
    E.current.ready ||
      ((E.current.azi = G.azi + K.azi),
      (E.current.elev = G.elev),
      (E.current.dist = G.dist),
      (E.current.tx = G.tx),
      (E.current.ty = G.ty),
      (E.current.tz = G.tz),
      (E.current.ready = !0));
    let se =
      t.elevBias === `top` ? 1.36 : t.elevBias === `side` ? 0.16 : G.elev;
    ((E.current.tx = $(E.current.tx, G.tx, 3, d)),
      (E.current.ty = $(E.current.ty, G.ty, 3, d)),
      (E.current.tz = $(E.current.tz, G.tz, 3, d)),
      (E.current.dist = $(E.current.dist, G.dist * K.distScale, 2.2, d)),
      K.userAngle
        ? ((E.current.azi = K.azi), (E.current.elev = K.elev))
        : ((E.current.azi = Ze(E.current.azi, G.azi, 1.7, d)),
          (E.current.elev = $(E.current.elev, se, 1.7, d)),
          (K.azi = E.current.azi),
          (K.elev = E.current.elev)));
    let ce = Math.cos(E.current.elev);
    (a.camera.position.set(
      E.current.tx + E.current.dist * ce * Math.cos(E.current.azi),
      E.current.ty + E.current.dist * Math.sin(E.current.elev),
      E.current.tz + E.current.dist * ce * Math.sin(E.current.azi),
    ),
      a.camera.lookAt(E.current.tx, E.current.ty, E.current.tz));
    let le = a.clock.elapsedTime;
    if (le - D.current > 0.12) {
      D.current = le;
      let e = X(f.t),
        t = F.sep * 25,
        r = k
          ? `已并合 · 椭圆星系`
          : f.t >= m.tPeri
            ? t < 40
              ? `再次穿越`
              : `第一次擦身之后`
            : t > 250
              ? `还在路上`
              : `即将擦身`;
      n({
        gyr: e,
        sepKpc: t,
        approachKmS: f.cfg.approachKmS,
        clusters: f.ignited,
        sunKpc: Je(f),
        phase: r,
        merged: k,
      });
    }
  });
  let P = (e) => {
    let t = e === 0 ? `#ffd9a0` : `#dbe6ff`,
      n = e === 0 ? `#ffb86b` : `#7ea6ff`,
      r = e === 0 ? 1 : 1.08;
    return (0, Z.jsxs)(
      `group`,
      {
        ref: (t) => {
          p.current[e] = t;
        },
        children: [
          (0, Z.jsx)(`sprite`, {
            scale: [0.42 * r, 0.42 * r, 1],
            children: (0, Z.jsx)(`spriteMaterial`, {
              map: a,
              color: t,
              transparent: !0,
              opacity: 0.62,
              blending: 2,
              depthWrite: !1,
              depthTest: !1,
            }),
          }),
          (0, Z.jsx)(`sprite`, {
            scale: [1.35 * r, 1.35 * r, 1],
            children: (0, Z.jsx)(`spriteMaterial`, {
              map: a,
              color: t,
              transparent: !0,
              opacity: 0.15,
              blending: 2,
              depthWrite: !1,
              depthTest: !1,
            }),
          }),
          (0, Z.jsx)(`sprite`, {
            scale: [3.8 * r, 3.8 * r, 1],
            children: (0, Z.jsx)(`spriteMaterial`, {
              map: a,
              color: n,
              transparent: !0,
              opacity: 0.055,
              blending: 2,
              depthWrite: !1,
              depthTest: !1,
            }),
          }),
        ],
      },
      e,
    );
  };
  return (0, Z.jsxs)(`group`, {
    children: [
      (0, Z.jsx)(O, {
        radius: 220,
        depth: 90,
        count: r ? 1800 : 3600,
        factor: 5,
        saturation: 0.06,
        fade: !0,
        speed: r ? 0 : 0.18,
      }),
      [0, 1].map((e) =>
        (0, Z.jsx)(
          `group`,
          {
            ref: (t) => {
              S.current[e] = t;
            },
            children: (0, Z.jsx)(`mesh`, {
              rotation: [-Math.PI / 2, 0, 0],
              material: A[e],
              children: (0, Z.jsx)(`planeGeometry`, {
                args: [te * 2, te * 2, 1, 1],
              }),
            }),
          },
          e,
        ),
      ),
      P(0),
      P(1),
      (0, Z.jsx)(`sprite`, {
        ref: w,
        children: (0, Z.jsx)(`spriteMaterial`, {
          map: a,
          color: `#ffc98a`,
          transparent: !0,
          opacity: 0,
          blending: 2,
          depthWrite: !1,
          depthTest: !1,
        }),
      }),
      (0, Z.jsx)(`points`, { geometry: c, material: l, frustumCulled: !1 }),
      (0, Z.jsx)(`primitive`, { object: d }),
      (0, Z.jsx)(`sprite`, {
        ref: T,
        scale: [0.15, 0.15, 1],
        children: (0, Z.jsx)(`spriteMaterial`, {
          map: a,
          color: `#ffd166`,
          transparent: !0,
          opacity: 0.7,
          blending: 2,
          depthWrite: !1,
          depthTest: !1,
        }),
      }),
    ],
  });
}
function at() {
  let e = D((e) => e.gl);
  return (
    (0, k.useEffect)(() => {
      e.setClearColor(`#02030a`, 1);
    }, [e]),
    null
  );
}
var ot = { grazing: `擦边`, "head-on": `对撞`, retrograde: `逆行` };
function st(e) {
  return `${(e * 10).toFixed(1)} 亿年`;
}
function ct({ controls: e }) {
  let t = w(),
    n = E(),
    { storyMode: f, enterFree: p, enterStory: m } = T(`galaxy-collision`),
    h = (0, k.useRef)(null),
    g = (0, k.useRef)(null),
    _ = (0, k.useRef)(null);
  if (!_.current) {
    let e =
      typeof window < `u` &&
      (window.innerWidth < 760 || (navigator.hardwareConcurrency ?? 8) <= 4);
    _.current = Ne({ ...ue }, e ? 3e3 : 6200, e ? 800 : 1600);
  }
  let v = (0, k.useRef)({
      goal: qe(0.15),
      target: qe(0.15),
      ceiling: M,
      playing: !1,
      rate: 1,
      glide: !1,
      framing: `auto`,
      elevBias: `auto`,
      hostTint: 0,
      gasLevel: 0.85,
      sunFocus: 0.35,
    }),
    y = (0, k.useRef)({ azi: 0, elev: 0.34, distScale: 1, userAngle: !1 }),
    [b, x] = (0, k.useState)(!1),
    [S, C] = (0, k.useState)(1),
    [D, ee] = (0, k.useState)(ue.mode),
    [O, A] = (0, k.useState)(`auto`),
    [j, N] = (0, k.useState)(!1),
    [P, ne] = (0, k.useState)(!1),
    [F, I] = (0, k.useState)({
      gyr: 0.15,
      sepKpc: 780,
      approachKmS: 110,
      clusters: 0,
      sunKpc: 8,
      phase: `还在路上`,
      merged: !1,
    });
  ((0, k.useEffect)(() => {
    e.completeOnboarding();
  }, [e]),
    (0, k.useEffect)(() => {
      n || ((v.current.playing = !0), x(!0));
    }, [n]),
    (0, k.useEffect)(() => {
      v.current.rate = S;
    }, [S]),
    (0, k.useEffect)(() => {
      ((v.current.elevBias = O), O !== `auto` && (y.current.userAngle = !1));
    }, [O]),
    (0, k.useEffect)(() => {
      let e = h.current;
      if (!e) return;
      let t = () => {
        let t = e.querySelector(`.experience-freebar`);
        if (((g.current = t), !t)) {
          e.style.setProperty(`--gcx-readout-bottom`, `28px`);
          return;
        }
        e.style.setProperty(
          `--gcx-readout-bottom`,
          `${Math.round(t.getBoundingClientRect().height) + 14}px`,
        );
      };
      t();
      let n = new ResizeObserver(t);
      return (n.observe(e), () => n.disconnect());
    }, [f]));
  let L = (0, k.useCallback)((e, t = !0, n = 1 / 0) => {
      let r = v.current;
      ((r.ceiling = Number.isFinite(n) ? Q(qe(n), 0, M) : M),
        (r.goal = Q(qe(e), 0, M)),
        (r.glide = t),
        t || (r.target = r.goal));
    }, []),
    re = (0, k.useCallback)((e) => {
      let t = _.current,
        n = { mode: e.mode ?? t.cfg.mode, approachKmS: ue.approachKmS };
      if (n.mode === t.cfg.mode && n.approachKmS === t.cfg.approachKmS) return;
      let r = t.t > t.track.tHandoff - 4;
      (Ke(t, n), ee(n.mode));
      let i = v.current,
        a = r ? X(t.track.tPeri) + 0.3 : X(i.target);
      ((i.ceiling = M),
        (i.goal = Q(qe(a), 0, M)),
        (i.target = i.goal),
        (i.glide = !1));
    }, []);
  (0, k.useEffect)(() => {
    let t = h.current;
    if (!t) return;
    let n = null,
      r = 0,
      i = 0,
      a = 0,
      o = (e) =>
        !(e instanceof HTMLElement) || !e.closest(`[data-experience-overlay]`),
      s = (e) => {
        o(e.target) &&
          ((n = e.pointerId), (r = e.clientX), (i = e.clientY), ne(!0));
      },
      c = (t) => {
        if (n !== t.pointerId) return;
        let a = t.clientX - r,
          o = t.clientY - i;
        if (((r = t.clientX), (i = t.clientY), Math.abs(a) + Math.abs(o) < 0.5))
          return;
        let s = y.current;
        ((s.userAngle = !0),
          (s.azi -= a * 0.006),
          (s.elev = Q(s.elev + o * 0.005, 0.06, 1.48)),
          e.registerInteraction());
      },
      l = (e) => {
        n === e.pointerId && ((n = null), ne(!1));
      },
      u = (t) => {
        if (!o(t.target)) return;
        t.preventDefault();
        let n = y.current;
        ((n.distScale = Q(
          n.distScale * Math.exp(t.deltaY * 0.0012),
          0.34,
          2.6,
        )),
          e.registerInteraction());
      },
      d = (t) => {
        if (t.touches.length !== 2) return;
        let n = Math.hypot(
          t.touches[0].clientX - t.touches[1].clientX,
          t.touches[0].clientY - t.touches[1].clientY,
        );
        if (a > 0) {
          let e = y.current;
          e.distScale = Q(e.distScale * (a / n), 0.34, 2.6);
        }
        ((a = n), e.registerInteraction());
      },
      f = () => {
        a = 0;
      };
    return (
      t.addEventListener(`pointerdown`, s),
      window.addEventListener(`pointermove`, c),
      window.addEventListener(`pointerup`, l),
      window.addEventListener(`pointercancel`, l),
      t.addEventListener(`wheel`, u, { passive: !1 }),
      t.addEventListener(`touchmove`, d, { passive: !0 }),
      t.addEventListener(`touchend`, f),
      () => {
        (t.removeEventListener(`pointerdown`, s),
          window.removeEventListener(`pointermove`, c),
          window.removeEventListener(`pointerup`, l),
          window.removeEventListener(`pointercancel`, l),
          t.removeEventListener(`wheel`, u),
          t.removeEventListener(`touchmove`, d),
          t.removeEventListener(`touchend`, f));
      }
    );
  }, [e]);
  let R = (0, k.useCallback)((e, t = {}) => {
      let n = v.current;
      ((n.framing = e),
        (n.hostTint = t.hostTint ?? 0),
        (n.gasLevel = t.gasLevel ?? 0.7),
        (n.sunFocus = t.sunFocus ?? 0.35),
        e === `auto` && (n.ceiling = M),
        (y.current.userAngle = !1),
        (y.current.distScale = 1),
        A(`auto`));
    }, []),
    z = (0, k.useCallback)((e) => {
      ((v.current.playing = e), x(e));
    }, []),
    B = [
      {
        title: `两张盘，正在互相靠近`,
        body: `近处这张是银河系。右边那片斜着的盘是仙女座——250 万光年外，正以每秒 110 公里朝我们过来。快进 30 亿年：它明显变大了。`,
        durationMs: 7600,
        action: () => {
          (re({ mode: `grazing`, approachKmS: 110 }),
            L(0.15, !1, 0.2),
            R(`approach`),
            z(!0),
            window.setTimeout(() => L(3.3, !0, 3.72), 60));
        },
      },
      {
        title: `第一次擦身，先甩出两条尾巴`,
        body: `40 亿年后它们第一次擦肩。引力拉近侧比拉远侧更狠，外盘的恒星被整段抽出去——两条几十万光年长的潮汐尾，中间还架着一座桥。星系相撞，首先是「形」的碰撞。`,
        durationMs: 7600,
        action: () => {
          (R(`wide`, { hostTint: 0.8, gasLevel: 0.3 }),
            L(4.26, !0, 4.36),
            z(!0));
        },
      },
      {
        title: `穿过去了，但几乎没有相撞`,
        body: `把时间倒回擦身那一刻，镜头推近：金色是银河系的恒星，蓝色是仙女座的。两群星直接穿过彼此——恒星之间的距离是它自己直径的三千万倍，像两群蜜蜂互相穿过。`,
        durationMs: 8200,
        action: () => {
          (R(`contact`, { hostTint: 1, sunFocus: 0.2 }),
            L(3.99, !0, 4.06),
            z(!0));
        },
      },
      {
        title: `但气体撞得上，于是天空亮起来`,
        body: `恒星穿得过去，气体云穿不过去。云与云正面相撞、被激波压缩，几百万年内就塌缩成一片新恒星——蓝白色的年轻星团在交会区亮成一串。这叫「星暴」。`,
        durationMs: 7600,
        action: () => {
          (R(`burst`, { gasLevel: 1.7 }), L(4.09, !0, 4.2), z(!0));
        },
      },
      {
        title: `并成一个椭圆星系：Milkomeda`,
        body: `又绕了几圈之后，两个核落到一起。旋涡盘没有了，气体也烧光了，剩下一团偏红的老年恒星——有人叫它 Milkomeda。金色那颗是太阳：它大概率被甩到离银心远得多的新轨道上。`,
        durationMs: 9e3,
        action: () => {
          (R(`remnant`, { sunFocus: 1 }), L(6.4, !0, 7), z(!0));
        },
      },
    ],
    V = F.gyr,
    H = F.merged
      ? t(`已并合`)
      : `${F.sepKpc >= 100 ? Math.round(F.sepKpc) : F.sepKpc.toFixed(1)} ${t(`kpc`)}`,
    U = F.sepKpc > 90 && !F.merged;
  return (0, Z.jsxs)(`div`, {
    ref: h,
    className: `oss-experience gcx-experience${f ? ` is-story` : ` is-free`}${P ? ` is-dragging` : ``}`,
    children: [
      (0, Z.jsx)(`div`, {
        className: `gcx-stage`,
        children: (0, Z.jsxs)(te, {
          dpr: [1, 2],
          gl: { antialias: !0, alpha: !1, powerPreference: `high-performance` },
          camera: { position: [0, 4, 12], fov: 42, near: 0.05, far: 900 },
          children: [
            (0, Z.jsx)(`color`, { attach: `background`, args: [`#02030a`] }),
            (0, Z.jsx)(at, {}),
            (0, Z.jsx)(it, {
              rtRef: _,
              view: v.current,
              onSample: I,
              reducedMotion: n,
              dragRef: y,
            }),
          ],
        }),
      }),
      (0, Z.jsx)(`div`, { className: `gcx-vignette`, "aria-hidden": `true` }),
      !f &&
        (0, Z.jsxs)(`header`, {
          className: `gcx-plate`,
          "data-experience-overlay": `true`,
          children: [
            (0, Z.jsx)(`strong`, { children: t(`把银河系推向仙女座`) }),
            (0, Z.jsx)(`span`, {
              children: t(
                `拖时间轴看 70 亿年：靠近、擦身、甩出潮汐尾，最后并成一个椭圆星系。拖动画面可以换视角。`,
              ),
            }),
          ],
        }),
      (0, Z.jsxs)(`aside`, {
        className: `gcx-readout`,
        "data-experience-overlay": `true`,
        "aria-label": t(`星系碰撞读数`),
        children: [
          (0, Z.jsxs)(`div`, {
            className: `gcx-readout-row`,
            children: [
              (0, Z.jsx)(`small`, { children: t(`距今`) }),
              (0, Z.jsx)(`strong`, {
                className: `is-accent`,
                children: t(st(V)),
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `gcx-readout-row`,
            children: [
              (0, Z.jsx)(`small`, { children: t(`两核间距`) }),
              (0, Z.jsx)(`strong`, { children: H }),
            ],
          }),
          U &&
            (0, Z.jsxs)(`div`, {
              className: `gcx-readout-row`,
              children: [
                (0, Z.jsx)(`small`, { children: t(`接近速度`) }),
                (0, Z.jsxs)(`strong`, {
                  children: [Math.round(F.approachKmS), ` `, t(`km/s`)],
                }),
              ],
            }),
          (0, Z.jsxs)(`div`, {
            className: `gcx-readout-row`,
            children: [
              (0, Z.jsx)(`small`, { children: t(`恒星相撞`) }),
              (0, Z.jsx)(`strong`, { children: t(`0 次`) }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `gcx-readout-row`,
            children: [
              (0, Z.jsx)(`small`, { children: t(`新生星团`) }),
              (0, Z.jsx)(`strong`, {
                className: `is-burst`,
                children: F.clusters,
              }),
            ],
          }),
          (0, Z.jsxs)(`div`, {
            className: `gcx-readout-row`,
            children: [
              (0, Z.jsx)(`small`, { children: t(`太阳距中心`) }),
              (0, Z.jsxs)(`strong`, {
                className: `is-sun`,
                children: [F.sunKpc.toFixed(0), ` `, t(`kpc`)],
              }),
            ],
          }),
          (0, Z.jsx)(`p`, {
            className: `gcx-readout-phase`,
            children: t(F.phase),
          }),
        ],
      }),
      !f &&
        (0, Z.jsxs)(o, {
          className: `gcx-freebar`,
          mainClassName: `gcx-freebar-main`,
          ariaLabel: t(`时间与交会参数`),
          primaryControlBudget: 2,
          secondaryDefault: `closed`,
          secondaryClassName: `gcx-freebar-secondary`,
          secondary: (0, Z.jsx)(`div`, {
            className: `gcx-tray`,
            children: (0, Z.jsxs)(`div`, {
              className: `gcx-chip-rail experience-freebar-chips`,
              role: `group`,
              "aria-label": t(`交会与工具`),
              children: [
                Object.keys(ot).map((n) =>
                  (0, Z.jsx)(
                    `button`,
                    {
                      type: `button`,
                      className: D === n ? `is-on` : void 0,
                      "aria-pressed": D === n,
                      onClick: () => {
                        (e.registerInteraction(), re({ mode: n }));
                      },
                      children: t(ot[n]),
                    },
                    n,
                  ),
                ),
                (0, Z.jsx)(`span`, {
                  className: `gcx-rail-sep`,
                  "aria-hidden": `true`,
                }),
                [0.5, 1, 2].map((n) =>
                  (0, Z.jsx)(
                    `button`,
                    {
                      type: `button`,
                      className: `gcx-rate-chip${S === n ? ` is-on` : ``}`,
                      "aria-pressed": S === n,
                      onClick: () => {
                        (e.registerInteraction(), C(n));
                      },
                      children: t(`${n}×`),
                    },
                    n,
                  ),
                ),
                (0, Z.jsx)(`span`, {
                  className: `gcx-rail-sep`,
                  "aria-hidden": `true`,
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  className: O === `top` ? `is-on` : void 0,
                  "aria-pressed": O === `top`,
                  onClick: () => {
                    (e.registerInteraction(),
                      A((e) => (e === `top` ? `side` : `top`)));
                  },
                  children: t(O === `top` ? `侧视` : `俯视`),
                }),
                (0, Z.jsx)(`button`, {
                  type: `button`,
                  className: `gcx-note-link`,
                  onClick: () => {
                    (e.registerInteraction(), N(!0));
                  },
                  children: t(`模型说明`),
                }),
                (0, Z.jsxs)(`button`, {
                  type: `button`,
                  className: `experience-freebar-reset`,
                  onClick: () => {
                    (e.registerInteraction(), L(0.15, !1), R(`auto`), z(!0));
                  },
                  "aria-label": t(`重置`),
                  children: [
                    (0, Z.jsx)(r, { weight: `bold`, "aria-hidden": `true` }),
                    (0, Z.jsx)(`span`, { children: t(`重置`) }),
                  ],
                }),
                (0, Z.jsxs)(`button`, {
                  type: `button`,
                  className: `experience-freebar-story`,
                  onClick: () => {
                    (e.registerInteraction(), m(), i(`galaxy-collision`));
                  },
                  "aria-label": t(`重播故事`),
                  children: [
                    (0, Z.jsx)(c, { weight: `fill`, "aria-hidden": `true` }),
                    (0, Z.jsx)(`span`, { children: t(`故事`) }),
                  ],
                }),
              ],
            }),
          }),
          children: [
            (0, Z.jsx)(`button`, {
              type: `button`,
              className: `experience-freebar-play gcx-play`,
              "data-playing": b ? `true` : `false`,
              onClick: () => {
                (e.registerInteraction(),
                  !b && v.current.goal >= 177.799 && L(0.15, !1),
                  z(!b));
              },
              "aria-label": t(b ? `暂停` : `播放`),
              children: b
                ? (0, Z.jsx)(l, { weight: `fill`, "aria-hidden": `true` })
                : (0, Z.jsx)(u, { weight: `fill`, "aria-hidden": `true` }),
            }),
            (0, Z.jsxs)(`div`, {
              className: `gcx-time`,
              role: `group`,
              "aria-label": t(`时间轴：距今多少亿年`),
              children: [
                (0, Z.jsx)(`span`, {
                  className: `gcx-time-label`,
                  children: t(`距今`),
                }),
                (0, Z.jsxs)(`div`, {
                  className: `gcx-time-track`,
                  children: [
                    (0, Z.jsx)(`input`, {
                      type: `range`,
                      min: 0,
                      max: 1e3,
                      value: Math.round((V / X(177.8)) * 1e3),
                      style: { "--fill": `${(V / X(177.8)) * 100}%` },
                      onChange: (t) => {
                        (e.registerInteraction(),
                          z(!1),
                          L((Number(t.target.value) / 1e3) * X(177.8), !1));
                      },
                      "aria-label": t(`时间轴：距今多少亿年`),
                    }),
                    (0, Z.jsxs)(`div`, {
                      className: `gcx-time-ends`,
                      "aria-hidden": `true`,
                      children: [
                        (0, Z.jsx)(`span`, { children: t(`今天`) }),
                        (0, Z.jsx)(`span`, { children: t(`并合`) }),
                      ],
                    }),
                  ],
                }),
                (0, Z.jsx)(`strong`, {
                  className: `gcx-time-value`,
                  children: t(st(V)),
                }),
              ],
            }),
          ],
        }),
      j &&
        (0, Z.jsx)(`div`, {
          className: `gcx-note`,
          role: `dialog`,
          "aria-label": t(`模型说明`),
          "data-experience-overlay": `true`,
          children: (0, Z.jsxs)(`article`, {
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                onClick: () => N(!1),
                "aria-label": t(`关闭`),
                children: (0, Z.jsx)(d, { weight: `bold` }),
              }),
              (0, Z.jsx)(`h2`, {
                children: t(`这是一台 1972 年的机器：限制性 N 体`),
              }),
              (0, Z.jsxs)(`p`, {
                children: [
                  t(
                    `阿拉尔·图姆雷与尤里·图姆雷兄弟在 1972 年那篇《Galactic Bridges and Tails》里做了一件很聪明的简化：只把两个星系的核当作`,
                  ),
                  (0, Z.jsx)(`strong`, { children: t(`质点`) }),
                  t(
                    `，几千颗盘星当作只受这两个质点引力、彼此不互相吸引的「试验粒子」。当时的计算机跑不了真正的 N 体，但这台简化机器一次就复现了天文照片上那些桥与潮尾——潮汐尾的形状，几乎只取决于交会的几何。这个世界跑的就是同一套算法。`,
                  ),
                ],
              }),
              (0, Z.jsx)(`p`, {
                children: t(
                  `时间轴按 NASA 与 Cox & Loeb (2008) 的结论标定：仙女座今天以约 110 km/s 靠近，40 亿年后第一次擦身，约 60 亿年后并合完成。仙女座的横向速度测量不确定度很大，所以「正撞 / 擦边」都在合理范围内——这也是三个交会方式都值得试的原因。`,
                ),
              }),
              (0, Z.jsx)(`p`, {
                children: t(
                  `恒星几乎不可能相撞不是艺术处理：太阳附近恒星的平均间距约 4 光年，是太阳直径的三千万倍。把太阳缩成一粒沙，最近的邻居在几十公里以外。而气体云的尺度是恒星的上亿倍，所以云会真的撞上、被压缩，点亮星暴。`,
                ),
              }),
              (0, Z.jsx)(`small`, {
                children: t(
                  `模型边界：质点势没有暗物质晕的延展结构，所以近距交会时的相对速度被高估，读数里只在两核相距 90 kpc 以上时显示接近速度；并合靠一项示意性的动力学摩擦项完成，不是自洽的 N 体计算；气体点火用的是两团气体在同一网格里相遇的判据，不是流体力学；粒子数、盘的厚度与颜色都做了可读性处理。轨道周期与真实值不成比例，只有时间轴上的关键时刻是标定过的。`,
                ),
              }),
            ],
          }),
        }),
      (0, Z.jsx)(a, {
        worldId: `galaxy-collision`,
        steps: B,
        placement: `stage`,
        stagePlan: [
          {
            position: `top-left`,
            mobilePosition: `top-left`,
            width: `wide`,
            treatment: `monumental`,
          },
          {
            position: `top-right`,
            mobilePosition: `top-right`,
            motion: `drift-left`,
            treatment: `editorial`,
          },
          {
            position: `bottom-left`,
            mobilePosition: `bottom-left`,
            motion: `rise`,
            treatment: `caption`,
          },
          {
            position: `bottom-right`,
            mobilePosition: `bottom-right`,
            motion: `drift-right`,
            treatment: `editorial`,
          },
          {
            position: `top-left`,
            mobilePosition: `top-left`,
            motion: `fade`,
            treatment: `caption`,
          },
        ],
        defaultOpen: f,
        showReplayChip: !1,
        onExit: () => {
          (p(), R(`auto`), z(!0));
        },
      }),
      !f &&
        (0, Z.jsx)(s, {
          worldId: `galaxy-collision`,
          gesture: {
            type: `scrub`,
            target: `.gcx-time input`,
            label: t(`拖时间轴，看 70 亿年`),
          },
        }),
    ],
  });
}
export { ct as GalaxyCollision, ct as worldRenderer };
