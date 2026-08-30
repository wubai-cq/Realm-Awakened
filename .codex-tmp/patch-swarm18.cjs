const fs = require('fs');
let m = fs.readFileSync('src/main.js', 'utf8').replace(/\r\n/g, '\n');
const sub = (re, to, tag) => {
  if (!re.test(m)) throw new Error('missing: ' + tag);
  m = m.replace(re, to);
};
sub(/const BUTTERFLY_SWARM = 12;/, 'const BUTTERFLY_SWARM = 18;', 'swarm size');
sub(/        role: random\(\) < 0\.62 \? 'flower' : 'stay',\n/, '', 'inline role');
sub(/    butterflyPlan = groups;/, [
  '    // roughly 55% of the swarm carries on to the blossom tree; the rest',
  '    // stay with the remnant so the particle side keeps its butterflies too',
  '    const order = groups.map((_, i) => i);',
  '    for (let i = order.length - 1; i > 0; i -= 1) {',
  '      const j = Math.floor(random() * (i + 1));',
  '      const tmp = order[i];',
  '      order[i] = order[j];',
  '      order[j] = tmp;',
  '    }',
  '    const stayTarget = Math.round(groups.length * 0.55);',
  '    order.forEach((gi, k) => {',
  "      groups[gi].role = k < stayTarget ? 'stay' : 'flower';",
  '    });',
  '    butterflyPlan = groups;',
].join('\n'), 'role assignment');
fs.writeFileSync('src/main.js', m);
console.log('patched ok');
