/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function findMedianSortedArrays(nums1, nums2) {
  let median = 0;
  let prevMedian = 0;

  for (let left = 0, right = 0; left + right <= Math.floor((nums1.length + nums2.length) / 2); ) {
    if (nums1[left] < nums2[right] || right >= nums2.length) {
      prevMedian = median;
      median = nums1[left];
      left++;
    } else {
      prevMedian = median;
      median = nums2[right];
      right++;
    }
  }

  return (nums1.length + nums2.length) % 2 === 0 ? (prevMedian + median) / 2 : median;
}
