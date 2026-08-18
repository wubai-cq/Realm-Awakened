export function getDopplerValues(progress) {
  const normalizedProgress = Math.min(1, Math.max(0, progress));
  const phase = normalizedProgress * Math.PI * 2;
  const sourceFrequency = 440 + Math.sin(phase) * 20;
  const velocityRatio = Math.sin(phase - 0.7) * 0.16 + Math.sin(phase * 2 + 0.3) * 0.04;

  return {
    sourceFrequency,
    velocityRatio,
    observedFrequency: sourceFrequency / (1 - velocityRatio),
  };
}
