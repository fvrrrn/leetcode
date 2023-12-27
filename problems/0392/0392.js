/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isSubsequence(s, t) {
  if (s.length === 0 && t.length === 0) return true;

  for (let sIndex = 0, tIndex = 0; tIndex < t.length; tIndex++) {
    if (t[tIndex] === s[sIndex]) sIndex++;
    if (sIndex >= s.length) return true;
  }
  return false;
}
