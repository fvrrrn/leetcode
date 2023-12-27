/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function majorityElement(nums) {
  /** @type {number | null} */
  let candidate1 = null;
  /** @type {number | null} */
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;

  for (const num of nums) {
    if (num === candidate1) {
      count1 += 1;
    } else if (num === candidate2) {
      count2 += 1;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1 -= 1;
      count2 -= 1;
    }
  }

  count1 = 0;
  count2 = 0;

  for (const num of nums) {
    if (num === candidate1) {
      count1 += 1;
    } else if (num === candidate2) {
      count2 += 1;
    }
  }

  if (count1 > nums.length / 3) {
    if (count2 > nums.length / 3) {
      return [candidate1, candidate2];
    }

    return [candidate1];
  } else if (count2 > nums.length / 3) {
    return [candidate2];
  }
  return [];
}
