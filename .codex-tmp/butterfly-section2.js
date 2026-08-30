  // Each butterfly is born out of the collision particles already around it:
  // seeds are spread across the flung cloud, every flung bead joins its
  // nearest seed, and the monarch pattern materialises right there — no bead
  // ever converges across the cloud. The real-flight kinematics are the
  // biomechanics staple: a snappy, slightly asymmetric stroke
  // δ(t) = δmax·tanh(κ·sin(2πf·t+φ)) drives the wing dihedral, the wings fold
  // around the body axis (x' = x·cosδ) while the tips arc up and down
  // (y' += |x|·sinδ), and the body bobs twice per stroke.
  let butterflyPlan = null;
  const ensureButterflyPlan = (flowerSpots) => {
    if (butterflyPlan || !flowerSpots || !flowerSpots.length) return;
    readBaked(tEnd); // park the buffer on the final baked pose
    const prevBase = Math.max(0, SAMPLES - 9) * PART_COUNT * 3;
    const tailIdx = [];
    for (let i = 0; i < PART_COUNT; i += 1) {
      const dx = tailPositions[i * 3];
      const dy = tailPositions[i * 3 + 1];
      const dz = tailPositions[i * 3 + 2];
      if (dx * dx + dy * dy + dz * dz > BUTTERFLY_TAIL_RADIUS * BUTTERFLY_TAIL_RADIUS) tailIdx.push(i);
    }
    const seedCount = Math.min(BUTTERFLY_SWARM, Math.max(3, Math.floor(tailIdx.length / 90)));
    const seeds = [];
    for (let s = 0; s < seedCount; s += 1) {
      seeds.push(tailIdx[Math.min(tailIdx.length - 1, Math.floor((s + random() * 0.85) * tailIdx.length / seedCount))]);
    }
    const buckets = seeds.map(() => []);
    tailIdx.forEach((i) => {
      const x = tailPositions[i * 3];
      const y = tailPositions[i * 3 + 1];
      const z = tailPositions[i * 3 + 2];
      let best = 0;
      let bestD = Infinity;
      seeds.forEach((s, si) => {
        const sx = tailPositions[s * 3] - x;
        const sy = tailPositions[s * 3 + 1] - y;
        const sz = tailPositions[s * 3 + 2] - z;
        const d2 = sx * sx + sy * sy + sz * sz;
        if (d2 < bestD) {
          bestD = d2;
          best = si;
        }
      });
      buckets[best].push(i);
    });
    const groups = [];
    buckets.forEach((members) => {
      if (members.length < 24) return;
      const starts = new Float32Array(members.length * 3);
      const picks = new Array(members.length);
      const jitter = new Float32Array(members.length);
      let cx = 0;
      let cy = 0;
      let cz = 0;
      let vx = 0;
      let vy = 0;
      let vz = 0;
      const phase = Math.floor(random() * BUTTERFLY_PATTERN.length);
      const stride = Math.max(1, Math.floor(BUTTERFLY_PATTERN.length / members.length));
      members.forEach((i, j) => {
        starts[j * 3] = tailPositions[i * 3];
        starts[j * 3 + 1] = tailPositions[i * 3 + 1];
        starts[j * 3 + 2] = tailPositions[i * 3 + 2];
        cx += starts[j * 3];
        cy += starts[j * 3 + 1];
        cz += starts[j * 3 + 2];
        vx += starts[j * 3] - baked[prevBase + i * 3];
        vy += starts[j * 3 + 1] - baked[prevBase + i * 3 + 1];
        vz += starts[j * 3 + 2] - baked[prevBase + i * 3 + 2];
        picks[j] = BUTTERFLY_PATTERN[(phase + j * stride) % BUTTERFLY_PATTERN.length];
        jitter[j] = (random() - 0.5) * 0.1;
      });
      cx /= members.length;
      cy /= members.length;
      cz /= members.length;
      const vLen = Math.hypot(vx, vy, vz) || 1;
      const lead = 1.8 + random() * 1.6;
      const spot = flowerSpots[Math.floor(random() * flowerSpots.length)];
      groups.push({
        members,
        starts,
        picks,
        jitter,
        cx,
        cy,
        cz,
        ctrlX: cx + (vx / vLen) * lead,
        ctrlY: cy + (vy / vLen) * lead,
        ctrlZ: cz + (vz / vLen) * lead,
        target: spot,
        delay: random() * 0.9,
        dur: 5.4 + random() * 1.0,
        scale: 0.55 + random() * 0.3,
        mirror: random() < 0.5 ? -1 : 1,
        tilt: (random() - 0.5) * 0.5,
        flapOmega: 2 * Math.PI * (7.5 + random() * 3),
        flapPhase: random() * 6.283,
        wanderFreq: 1.2 + random() * 1.2,
        wanderPhase: random() * 6.283,
        wanderAmp: 0.26 + random() * 0.3,
        bobFreq: 1.8 + random() * 1.4,
        bobPhase: random() * 6.283,
        bobAmp: 0.09 + random() * 0.12,
      });
    });
    butterflyPlan = groups;
  };
  const updateButterflies = (offset, frameTime, flowerSpots) => {
    ensureButterflyPlan(flowerSpots);
    if (!butterflyPlan) return;
    const T = offset - BUTTERFLY_OFFSET;
    const colorArr = disk.color;
    for (const g of butterflyPlan) {
      const ft = THREE.MathUtils.clamp((T - g.delay) / g.dur, 0, 1);
      const et = ft * ft * (3 - 2 * ft);
      const u = 1 - et;
      const bx = u * u * g.cx + 2 * u * et * g.ctrlX + et * et * g.target.x;
      const by = u * u * g.cy + 2 * u * et * g.ctrlY + et * et * g.target.y;
      const bz = u * u * g.cz + 2 * u * et * g.ctrlZ + et * et * g.target.z;
      // sudden appearance: a two-to-three frame snap plus a brightness flash
      const vis = THREE.MathUtils.smoothstep(T - g.delay, 0, 0.12);
      const flash = 1 + 1.5 * (1 - THREE.MathUtils.smoothstep(T - g.delay, 0, 0.4));
      const stroke = Math.tanh(2.2 * Math.sin(frameTime * g.flapOmega + g.flapPhase));
      const delta = stroke * 1.15;
      const cosD = Math.cos(delta);
      const sinD = Math.sin(delta);
      const bodyBob = Math.cos(frameTime * g.flapOmega * 2 + g.flapPhase) * 0.04;
      const flightEnv = Math.sin(Math.PI * Math.min(1, ft * 1.2));
      const wanderX = Math.sin(T * g.wanderFreq + g.wanderPhase) * g.wanderAmp * flightEnv;
      const bobY = Math.sin(T * g.bobFreq + g.bobPhase) * g.bobAmp * flightEnv;
      const ct = Math.cos(g.tilt);
      const st = Math.sin(g.tilt);
      g.members.forEach((i, j) => {
        const pat = g.picks[j];
        const wingX = Math.abs(pat[0]);
        const side = pat[0] < 0 ? -1 : 1;
        const px = side * wingX * cosD;
        const py = pat[1] + wingX * sinD * 0.55;
        const ox = (px * ct - py * st) * g.scale;
        const oy = (px * st + py * ct) * g.scale;
        tailPositions[i * 3] = g.starts[j * 3] + (bx + ox + wanderX - g.starts[j * 3]) * vis;
        tailPositions[i * 3 + 1] = g.starts[j * 3 + 1]
          + (by + oy + bobY + bodyBob - g.starts[j * 3 + 1]) * vis;
        tailPositions[i * 3 + 2] = g.starts[j * 3 + 2]
          + (bz + pat[2] + g.jitter[j] - g.starts[j * 3 + 2]) * vis;
        const glow = flash * vis;
        colorArr[i * 3] = tailBaseColors[i * 3]
          + (Math.min(1.2, pat[3] * 1.25 * glow + 0.1) - tailBaseColors[i * 3]) * vis;
        colorArr[i * 3 + 1] = tailBaseColors[i * 3 + 1]
          + (Math.min(1.15, pat[4] * 1.15 * glow + 0.09) - tailBaseColors[i * 3 + 1]) * vis;
        colorArr[i * 3 + 2] = tailBaseColors[i * 3 + 2]
          + (Math.min(1.1, pat[5] * 1.1 * glow + 0.08) - tailBaseColors[i * 3 + 2]) * vis;
      });
    }
    tailGeometry.getAttribute('position').needsUpdate = true;
    tailGeometry.getAttribute('aColor').needsUpdate = true;
  };
