/**
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false;

  let reversed = 0;
  let y = x;

  while (y > 0) {
    const lastDigit = y % 10;
    reversed = reversed * 10 + lastDigit;
    y = (y / 10) | 0;
  }
  return x === reversed;
}
