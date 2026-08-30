const fs = require('fs');
let m = fs.readFileSync('src/main.js', 'utf8').replace(/\r\n/g, '\n');
const must = (cond, tag) => { if (!cond) throw new Error('missing: ' + tag); };

// A. imports
must(m.includes("  SCENE_SIX_BUTTERFLY_START,\n"), 'import anchor');
m = m.replace(
  "  SCENE_SIX_BUTTERFLY_START,\n",
  "  SCENE_SIX_BUTTERFLY_START,\n  SCENE_TITLES_START,\n  SCENE_TITLES_MID,\n  TITLE_TEXT_ONE,\n  TITLE_TEXT_TWO,\n",
);

// B. element refs
must(m.includes("const impactCountEl = document.querySelector('#impact-count');\n"), 'refs anchor');
m = m.replace(
  "const impactCountEl = document.querySelector('#impact-count');\n",
  [
    "const impactCountEl = document.querySelector('#impact-count');",
    "const titlesCanvas = document.querySelector('#titles-canvas');",
    "const titleLockupEl = document.querySelector('.title-lockup');",
    "const legendEl = document.querySelector('.legend');",
    '',
  ].join('\n'),
);

// C. the closing titles system (site-faithful port), before createBackgroundStars
must(m.includes('function createBackgroundStars() {'), 'system anchor');
const system = [
  '// ---------- the closing titles ----------',
  '// Canvas particle text, ported bead-for-bead from the bootstrapmb #14276',
  '// demo: the line is drawn bold in Microsoft YaHei on a black offscreen',
  '// canvas, every 4th pixel on both axes that reads white becomes a 3x3',
  '// bead, the beads fly from their previous home to the new glyph at a',
  '// constant step and settle there while 400 background specks drift down',
  '// the frame. Positions stay a pure function of story time so seeks land',
  '// frame-exact.',
  'const titleCtx = titlesCanvas.getContext(\'2d\');',
  'const titles = { w: 0, h: 0, data: null };',
  'const hashRand = (i, s) => {',
  '  const v = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;',
  '  return v - Math.floor(v);',
  '};',
  'function sampleTitleTargets(text, fontSize, w, h) {',
  '  const off = document.createElement(\'canvas\');',
  '  off.width = w;',
  '  off.height = h;',
  '  const ctx = off.getContext(\'2d\');',
  '  ctx.fillStyle = \'#000\';',
  '  ctx.fillRect(0, 0, w, h);',
  '  ctx.fillStyle = \'#fff\';',
  '  ctx.font = `bold ${fontSize}px "Microsoft YaHei", "PingFang SC", sans-serif`;',
  '  ctx.textAlign = \'center\';',
  '  ctx.textBaseline = \'middle\';',
  '  ctx.fillText(text, w / 2, h / 2);',
  '  const data = ctx.getImageData(0, 0, w, h).data;',
  '  const targets = [];',
  '  let index = 0;',
  '  for (let i = 0; i < data.length; i += 4) {',
  '    const x = index % w;',
  '    const y = Math.floor(index / w);',
  '    if (x % 4 === 0 && y % 4 === 0 && data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) {',
  '      targets.push({ x, y });',
  '    }',
  '    index += 1;',
  '  }',
  '  return targets;',
  '}',
  'function titlesResize() {',
  '  titles.w = titlesCanvas.clientWidth;',
  '  titles.h = titlesCanvas.clientHeight;',
  '  titlesCanvas.width = titles.w;',
  '  titlesCanvas.height = titles.h;',
  '  if (!titles.w || !titles.h) return;',
  '  const size1 = Math.min(',
  '    (titles.w * 0.7) / TITLE_TEXT_ONE.length,',
  '    titles.h * 0.5,',
  '  );',
  '  const size2 = Math.min(',
  '    (titles.w * 0.7) / TITLE_TEXT_TWO.length,',
  '    titles.h * 0.16,',
  '  );',
  '  const t1 = sampleTitleTargets(TITLE_TEXT_ONE, size1, titles.w, titles.h);',
  '  const t2 = sampleTitleTargets(TITLE_TEXT_TWO, size2, titles.w, titles.h);',
  '  // cue-1 beads start inside a random fontSize box around the centre, the',
  '  // same throw the demo gives its first line',
  '  const starts = t1.map((p, i) => ({',
  '    x: hashRand(i, 1) * size1 + titles.w / 2 - size1 / 2,',
  '    y: hashRand(i, 2) * size1 + titles.h / 2 - size1 / 2,',
  '  }));',
  '  titles.data = { t1, t2, starts };',
  '}',
  'function titlePositions(frameTime) {',
  '  const { t1, t2, starts } = titles.data;',
  '  const p1 = THREE.MathUtils.clamp(',
  '    (frameTime - SCENE_TITLES_START) / 1.2, 0, 1);',
  '  const out = t1.map((p, i) => ({',
  '    x: starts[i].x + (p.x - starts[i].x) * p1,',
  '    y: starts[i].y + (p.y - starts[i].y) * p1,',
  '  }));',
  '  if (frameTime >= SCENE_TITLES_MID) {',
  "    // the demo's signature re-flow: every bead leaves the old glyph and",
  '    // settles into the next line, extra beads are spliced away',
  '    const p2 = THREE.MathUtils.clamp(',
    '      (frameTime - SCENE_TITLES_MID) / 1.2, 0, 1);',
  '    for (let i = 0; i < t2.length; i += 1) {',
  '      const src = t1[i % t1.length];',
  '      out[i] = {',
  '        x: src.x + (t2[i].x - src.x) * p2,',
  '        y: src.y + (t2[i].y - src.y) * p2,',
  '      };',
  '    }',
  '  }',
  '  return out;',
  '}',
  'function updateTitles(frameTime) {',
  '  const titlesActive = frameTime >= SCENE_TITLES_START;',
  '  titlesCanvas.style.opacity = titlesActive ? \'1\' : \'0\';',
  '  if (!titlesActive || !titles.data || !titles.w) return;',
  '  const ctx = titleCtx;',
  '  ctx.clearRect(0, 0, titles.w, titles.h);',
  "  // dim the butterfly tableau down to the demo's black backdrop",
  '  const dim = THREE.MathUtils.smoothstep(',
  '    frameTime, SCENE_TITLES_START, SCENE_TITLES_START + 0.9) * 0.92;',
  '  ctx.fillStyle = `rgba(0, 0, 0, ${dim.toFixed(3)})`;',
  '  ctx.fillRect(0, 0, titles.w, titles.h);',
  '  ctx.fillStyle = \'rgba(255, 255, 255, 0.75)\';',
  '  ctx.beginPath();',
  '  for (let i = 0; i < 400; i += 1) {',
  '    const speed = 0.5 + hashRand(i, 7) * 2.5;',
  '    const x = hashRand(i, 8) * titles.w;',
  '    const y = (hashRand(i, 9) * titles.h + frameTime * speed * 60) % titles.h;',
  '    ctx.rect(x, y, 2, 2);',
  '  }',
  '  ctx.fill();',
  '  ctx.fillStyle = \'#fff\';',
  '  ctx.beginPath();',
  '  const pts = titlePositions(frameTime);',
  '  for (const p of pts) ctx.rect(p.x, p.y, 3, 3);',
  '  ctx.fill();',
  '}',
  '',
].join('\n');
m = m.replace('function createBackgroundStars() {', system + 'function createBackgroundStars() {');

// D. chrome fade + titles draw inside updateScene
must(m.includes('  updateSceneSix(sceneSix, sceneSixState, frameTime);\n'), 'updateSceneSix call');
m = m.replace(
  '  updateSceneSix(sceneSix, sceneSixState, frameTime);\n',
  [
    '  updateSceneSix(sceneSix, sceneSixState, frameTime);',
    '  // the closing titles take the frame: fade the story chrome away and',
    '    // let the particle text own the screen',
    '  const titlesActive = frameTime >= SCENE_TITLES_START;',
    '  titleLockupEl.style.opacity = titlesActive ? \'0\' : \'\';',
    '  legendEl.style.opacity = titlesActive ? \'0\' : \'\';',
    '  if (titlesActive) {',
    '    subtitleEl.style.opacity = \'0\';',
    '    captionEl.style.opacity = \'0\';',
    '    cosmicClockEl.style.opacity = \'0\';',
    '    gravityNoteEl.style.opacity = \'0\';',
    '  }',
    '  updateTitles(frameTime);',
    '',
  ].join('\n'),
);

// E. resize hook
must(m.includes('  if (sceneSix) {\n    sceneSix.handleResize(canvas.clientHeight, outputScale);\n  }\n'), 'resize anchor');
m = m.replace(
  '  if (sceneSix) {\n    sceneSix.handleResize(canvas.clientHeight, outputScale);\n  }\n',
  '  if (sceneSix) {\n    sceneSix.handleResize(canvas.clientHeight, outputScale);\n  }\n  titlesResize();\n',
);

fs.writeFileSync('src/main.js', m);
console.log('titles patched, size:', m.length);
