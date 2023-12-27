/**
 * @param {number} x
 * @returns {number}
 */
function reverse(x) {
  const minInt = -Math.pow(2, 31);
  const maxInt = -minInt - 1;

  const isNegative = x < 0;
  let reversed = 0;
  if (isNegative) {
    x = -x;
  }

  while (x > 0) {
    const remainder = x % 10;
    reversed = reversed * 10 + remainder;
    x = Math.floor(x / 10);
  }

  if (reversed > maxInt) {
    return 0;
  }
  return isNegative ? -reversed : reversed;
}
