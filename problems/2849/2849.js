/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @returns {boolean}
 */
function isReachableAtTime(sx, sy, fx, fy, t) {
  if (sx === fx && sy === fy && t === 1) return false;
  return t >= Math.max(Math.abs(sx - fx), Math.abs(sy - fy));
}

// yDiff + sx-fx - yDiff
