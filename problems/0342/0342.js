/**
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfFour(n) {
  if ((n & 0x10000000) == 1 || n == 0) return false; //negative or ZERO
  if (n == 1) return true; //ONE.

  //4 = 100, 16 = 10000, 64 = 1000000, ....
  //3 = 11, 15 = 1111, 63 = 111111, ...
  const mask = 0b01010101010101010101010101010101;

  return (n & (n - 1)) == 0 && (n | mask) == mask;

  // Solution 2
  // if (n < 0) return false
  // const log4 = Math.log(n) / Math.log(4)
  // return log4 === (log4 | 0)

  // Solution 3
  // for (let i = 0; i < 20; i++) {
  //   if (4 ** i === n) return true
  // }
  // return false
}
