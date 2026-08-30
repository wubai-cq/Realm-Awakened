  // ---------- the butterfly migration ----------
  // Monarch point-cloud carried by particleify's own recipe: the reference
  // sheet is drawn 200x200 on black, every pixel brighter than 15 becomes a
  // bead, depth comes from brightness (bright wing cells float toward the
  // viewer) and each bead keeps the pixel's original colour. 900 beads are
  // stride-sampled across the site's full 6579-point list and stored as
  // "x,y,z,r,g,b" rows in a ±1 wingspan frame. After the remnant settles,
  // only the particles the collision flung past the tail radius regroup into
  // the swarm — the cores and their disks stay put — and each butterfly
  // departs along its particles' own drift before the bezier steers it to
  // the blossom tree, wandering and flapping all the way.
  const BUTTERFLY_TAIL_RADIUS = 1.7;
  const BUTTERFLY_SWARM = 12;
  const BUTTERFLY_OFFSET = SCENE_SIX_BUTTERFLY_START - SCENE_SIX_START;
  const tailBaseColors = Float32Array.from(disk.color);
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
    const groupSize = Math.max(60, Math.round(tailIdx.length / BUTTERFLY_SWARM));
    for (let i = tailIdx.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      const tmp = tailIdx[i];
      tailIdx[i] = tailIdx[j];
      tailIdx[j] = tmp;
    }
    const groups = [];
    for (let gBase = 0; gBase < tailIdx.length; gBase += groupSize) {
      const members = tailIdx.slice(gBase, gBase + groupSize);
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
        delay: random() * 1.2,
        dur: 5.3 + random() * 1.0,
        scale: 0.55 + random() * 0.3,
        mirror: random() < 0.5 ? -1 : 1,
        tilt: (random() - 0.5) * 0.5,
        wanderFreq: 1.2 + random() * 1.2,
        wanderPhase: random() * 6.283,
        wanderAmp: 0.26 + random() * 0.3,
        bobFreq: 1.8 + random() * 1.4,
        bobPhase: random() * 6.283,
        bobAmp: 0.09 + random() * 0.12,
        flapPhase: random() * 6.283,
        flapSpeed: 4.6 + random() * 1.8,
      });
    }
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
      const morph = THREE.MathUtils.smoothstep(T - g.delay, 0, 1.1);
      const flightEnv = Math.sin(Math.PI * Math.min(1, ft * 1.2));
      const wanderX = Math.sin(T * g.wanderFreq + g.wanderPhase) * g.wanderAmp * flightEnv;
      const bobY = Math.sin(T * g.bobFreq + g.bobPhase) * g.bobAmp * flightEnv;
      const flap = Math.sin(frameTime * g.flapSpeed + g.flapPhase);
      const bodyBob = flap * 0.05 * flightEnv;
      const ct = Math.cos(g.tilt);
      const st = Math.sin(g.tilt);
      g.members.forEach((i, j) => {
        const pat = g.picks[j];
        const shimmer = Math.sin(frameTime * 2.6 + j * 1.7 + g.flapPhase) * 0.014;
        const px = pat[0] * g.mirror;
        const ox = (px * ct - pat[1] * st) * g.scale;
        const oy = (px * st + pat[1] * ct) * g.scale + flap * 0.035;
        tailPositions[i * 3] = g.starts[j * 3] + (bx + ox + wanderX - g.starts[j * 3]) * morph;
        tailPositions[i * 3 + 1] = g.starts[j * 3 + 1]
          + (by + oy + bobY + bodyBob + shimmer - g.starts[j * 3 + 1]) * morph;
        tailPositions[i * 3 + 2] = g.starts[j * 3 + 2]
          + (bz + pat[2] + g.jitter[j] - g.starts[j * 3 + 2]) * morph;
        colorArr[i * 3] = tailBaseColors[i * 3]
          + (Math.min(1.1, pat[3] * 1.25 + 0.1) - tailBaseColors[i * 3]) * morph;
        colorArr[i * 3 + 1] = tailBaseColors[i * 3 + 1]
          + (Math.min(1.05, pat[4] * 1.15 + 0.09) - tailBaseColors[i * 3 + 1]) * morph;
        colorArr[i * 3 + 2] = tailBaseColors[i * 3 + 2]
          + (Math.min(1.0, pat[5] * 1.1 + 0.08) - tailBaseColors[i * 3 + 2]) * morph;
      });
    }
    tailGeometry.getAttribute('position').needsUpdate = true;
    tailGeometry.getAttribute('aColor').needsUpdate = true;
  };
