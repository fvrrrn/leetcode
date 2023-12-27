/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
function decodeAtIndex(s, k) {
  let size = 0;

  // Calc the size of dec str
  for (const l of s) {
    size = isNaN(+l) ? size + 1 : +l * size;
  }

  // s = leet2code3
  // decodedS = leetleetcodeleetleetcodeleetleetcode, size = 36
  // k = 10
  // k = 10 % 36 => 10

  // step 1: k = 10, size = 12 (size /= 3), leet2code[3]
  // step 2: k = 10, size = 11, leet2cod[e]3
  // step 3: k = 10, size = 10, leet2co[d]e3
  // step 4: k = 0 => return leet2c[o]de3

  // Traverse the string backward to find the k-th character
  for (let i = s.length - 1; i >= 0; i--) {
    const l = s[i];
    k %= size;

    if (k === 0 && isNaN(+l)) {
      return l;
    } else if (!isNaN(+l)) {
      size /= +l;
    } else {
      size--;
    }
  }

  return s[1];
}
