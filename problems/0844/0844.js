/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function backspaceCompare(s, t) {
  let backspaceCountS = 0;
  let backspaceCountT = 0;
  let i = s.length - 1;
  let j = t.length - 1;
  while (i >= 0 || j >= 0) {
    if (s[i] === "#") {
      --i;
      ++backspaceCountS;
    } else if (t[j] === "#") {
      --j;
      ++backspaceCountT;
    } else if (backspaceCountS > 0) {
      --i;
      --backspaceCountS;
    } else if (backspaceCountT > 0) {
      --j;
      --backspaceCountT;
    } else if (s[i--] !== t[j--]) {
      return false;
    }
  }
  return true;
}
