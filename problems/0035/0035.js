/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const pivot = Math.floor((start + end) / 2);
    if (nums[pivot] === target) return pivot;
    else if (nums[pivot] < target) start = pivot + 1;
    else end = pivot - 1;
  }

  return start;
}
