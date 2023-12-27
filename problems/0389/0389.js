/**
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
function findTheDifference(s, t) {
  let charCode = t.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    charCode += t.charCodeAt(i + 1) - s.charCodeAt(i);
  }

  return String.fromCharCode(charCode);
}
