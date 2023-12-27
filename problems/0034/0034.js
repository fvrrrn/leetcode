/**
 * @param {number[]} arr
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function first(arr, x, n = arr.length) {
  let low = 0,
    high = n - 1,
    res = -1;
  while (low <= high) {
    // Normal Binary Search Logic
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) high = mid - 1;
    else if (arr[mid] < x) low = mid + 1;
    // If arr[mid] is same as x, we
    // update res and move to the left
    // half.
    else {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}

/**
 * If x is present in arr[] then returns the index of LAST occurrence of x in arr[0..n-1], otherwise returns -1
 * @param {number[]} arr
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function last(arr, x, n = arr.length) {
  let low = 0,
    high = n - 1,
    res = -1;
  while (low <= high) {
    // Normal Binary Search Logic
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) high = mid - 1;
    else if (arr[mid] < x) low = mid + 1;
    // If arr[mid] is same as x, we
    // update res and move to the right
    // half.
    else {
      res = mid;
      low = mid + 1;
    }
  }
  return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} nums
 */
function searchRange(nums, target) {
  return [first(nums, target), last(nums, target)];
}
