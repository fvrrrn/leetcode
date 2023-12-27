/**
 * @param {number[]} nums
 * @param {number[]} target
 * @returns {number[]}
 */
export function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined && map[target - nums[i]] !== i) return [i, map[target - nums[i]]];
  }

  return [];
}
