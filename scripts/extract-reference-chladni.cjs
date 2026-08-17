const fs = require('node:fs');
const path = require('node:path');
const { app, BrowserWindow } = require('electron');

const workspace = path.resolve(__dirname, '..');
const source = process.env.CHLADNI_SOURCE
  || 'C:\\Users\\HUAWEI\\Desktop\\3D-Chladni\\app\\index.html';
const output = path.join(workspace, 'public', 'chladni-reference.bin');
const preview = path.join(workspace, '.superpowers', 'reference-chladni-source.png');
const seed = 20260710;
const targetCount = 10000;

app.on('window-all-closed', () => {});

async function waitFor(win, expression, timeout = 15000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await win.webContents.executeJavaScript(expression).catch(() => false)) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('Timed out waiting for the reference renderer');
}

async function main() {
  await app.whenReady();
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    paintWhenInitiallyHidden: true,
    backgroundColor: '#050608',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false,
    },
  });

  try {
    await win.loadFile(source, {
      query: { overlay: '1', parity: '1', seed: String(seed), style: 'cosmic' },
    });
    await waitFor(win, 'Boolean(window.soundMotionTest)');
    const payload = await win.webContents.executeJavaScript(
      `window.soundMotionTest.screenSaverSnapshotForBuild(${seed}, false)`,
    );
    const bytes = Buffer.from(payload.data, 'base64');
    const sourceData = new Float32Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 4);
    const ranked = [];
    for (let index = 0; index < payload.count; index += 1) {
      const offset = index * payload.stride;
      const onNode = sourceData[offset + 3];
      const web = sourceData[offset + 4];
      const stableVariation = 0.86 + ((Math.imul(index ^ 0x9e37, 2654435761) >>> 0) / 4294967296) * 0.14;
      const score = (0.016 + 0.531 * (onNode ** 2.21)) * web * stableVariation;
      ranked.push({ index, score });
    }
    ranked.sort((a, b) => b.score - a.score);
    const selected = ranked.slice(0, targetCount).sort((a, b) => a.index - b.index);
    const outputData = new Float32Array(selected.length * 6);
    selected.forEach(({ index }, selectedIndex) => {
      const sourceOffset = index * payload.stride;
      const outputOffset = selectedIndex * 6;
      for (let channel = 0; channel < 6; channel += 1) {
        outputData[outputOffset + channel] = sourceData[sourceOffset + channel];
      }
    });

    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.mkdirSync(path.dirname(preview), { recursive: true });
    fs.writeFileSync(output, Buffer.from(outputData.buffer));
    const image = await win.webContents.capturePage();
    fs.writeFileSync(preview, image.toPNG());
    console.log(`Extracted ${selected.length} of ${payload.count} reference particles to ${output}`);
  } finally {
    win.destroy();
    app.quit();
  }
}

main().catch((error) => {
  console.error(error);
  app.exit(1);
});
