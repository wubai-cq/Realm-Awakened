const fs = require('fs');
let m = fs.readFileSync('src/main.js', 'utf8').replace(/\r\n/g, '\n');
const must = (cond, tag) => { if (!cond) throw new Error('missing: ' + tag); };

// 1. flower spots sit on the canopy rim, pushed outward (deterministic)
{
  const start = m.indexOf('    const spots = [];');
  const endMarker = '    six.flowerSpots = spots;';
  const end = m.indexOf(endMarker, start);
  must(start >= 0 && end >= 0, 'flowerSpots block');
  const replacement = [
    '    const rim = anchors',
    '      .filter((_, i) => i % step === 0)',
    '      .map((a) => {',
    '        const world = sceneFiveWeb.group.localToWorld(a.p.clone());',
    '        return new THREE.Vector3(',
    '          (world.x - six.group.position.x) / 0.62,',
    '          (world.y - six.group.position.y) / 0.62,',
    '          (world.z - six.group.position.z) / 0.62,',
    '        );',
    '      });',
    '    const centre = rim',
    '      .reduce((acc, v) => acc.add(v), new THREE.Vector3())',
    '      .multiplyScalar(1 / rim.length);',
    '    // butterflies perch on the canopy rim, never buried inside it',
    '    const spots = rim.map((v, i) => {',
    '      const outward = v.clone().sub(centre);',
    '      const len = Math.max(outward.length(), 1e-4);',
    '      const h = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;',
    '      return v.clone().add(outward.multiplyScalar((0.3 + h * 0.4) / len));',
    '    });',
    '    ' + endMarker,
  ].join('\n');
  m = m.slice(0, start) + replacement + m.slice(end + endMarker.length);
}

// 2. role split + shorter flower flight + stay orbit params
{
  const old = [
    '        target: spot,',
    '        delay: random() * 0.9,',
    '        dur: 5.4 + random() * 1.0,',
  ].join('\n');
  must(m.includes(old), 'role params');
  const replacement = [
    '        target: spot,',
    "        role: random() < 0.62 ? 'flower' : 'stay',",
    '        delay: random() * 0.9,',
    '        dur: 3.8 + random() * 0.8,',
    '        orbitR: 0.24 + random() * 0.34,',
    '        orbitFreq: 0.5 + random() * 0.55,',
    '        orbitPhase: random() * 6.283,',
    '        hoverFreq: 1.5 + random() * 0.8,',
    '        hoverPhase: random() * 6.283,',
  ].join('\n');
  m = m.replace(old, replacement);
}

// 3. role-aware motion (keeps the vis/flash sudden-appearance logic below)
{
  const start = m.indexOf('    for (const g of butterflyPlan) {');
  const endMarker = '      // sudden appearance';
  const end = m.indexOf(endMarker, start);
  must(start >= 0 && end >= 0, 'motion block');
  const replacement = [
    '    for (const g of butterflyPlan) {',
    "      const isFlower = g.role === 'flower';",
    '      const ft = THREE.MathUtils.clamp(',
    '        (T - g.delay) / (isFlower ? g.dur : 1.2), 0, 1);',
    '      const et = ft * ft * (3 - 2 * ft);',
    '      let bx; let by; let bz;',
    '      if (isFlower) {',
    '        const u = 1 - et;',
    '        bx = u * u * g.cx + 2 * u * et * g.ctrlX + et * et * g.target.x;',
    '        by = u * u * g.cy + 2 * u * et * g.ctrlY + et * et * g.target.y;',
    '        bz = u * u * g.cz + 2 * u * et * g.ctrlZ + et * et * g.target.z;',
    '        // hovering on the blossom: a gentle drift keeps the swarm readable',
    '        // on top of the flowers for well over a second before the cut',
    '        bx += Math.sin(frameTime * g.hoverFreq + g.hoverPhase) * 0.07 * et;',
    '        by += Math.cos(frameTime * g.hoverFreq * 0.8 + g.hoverPhase) * 0.05 * et;',
    '      } else {',
    '        // the rest of the swarm stays with the remnant, looping slowly',
    '        // around their birth cluster so the particle side of the frame',
    '        // keeps its butterflies too',
    '        const a = T * g.orbitFreq + g.orbitPhase;',
    '        bx = g.cx + Math.sin(a) * g.orbitR;',
    '        by = g.cy + Math.cos(a * 0.8) * g.orbitR * 0.6;',
    '        bz = g.cz + Math.sin(a * 0.6 + g.orbitPhase) * g.orbitR * 0.3;',
    '      }',
    '      ' + endMarker,
  ].join('\n');
  m = m.slice(0, start) + replacement + m.slice(end);
}

fs.writeFileSync('src/main.js', m);
console.log('patched ok');
