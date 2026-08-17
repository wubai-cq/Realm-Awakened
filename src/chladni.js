export function chladniValue(x, y, m, n) {
  return Math.sin(m * Math.PI * x) * Math.sin(n * Math.PI * y)
    - Math.sin(n * Math.PI * x) * Math.sin(m * Math.PI * y);
}

export function chladniVolumeValue(x, y, z, m, n, p) {
  return Math.sin(m * Math.PI * x) * Math.sin(n * Math.PI * y)
    + Math.sin(n * Math.PI * y) * Math.sin(p * Math.PI * z)
    + Math.sin(p * Math.PI * z) * Math.sin(m * Math.PI * x);
}
