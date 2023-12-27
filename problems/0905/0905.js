/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function sortArrayByParity(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return nums;

  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] % 2 === 0) {
      if (i !== j) {
        nums[i] += nums[j];
        nums[j] = nums[i] - nums[j];
        nums[i] -= nums[j];
      }
      i++;
    }
  }
  return nums;
}
