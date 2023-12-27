class TreeNode {
  /** @type {number} */
  val;
  /** @type {TreeNode | null} */
  left;
  /** @type {TreeNode | null} */
  right;

  /**
   *
   * @param {number} [val]
   * @param {TreeNode | null} [left]
   * @param {TreeNode | null} [right]
   */
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
function largestValues(root) {
  /** @type {number[]} */
  const result = [];
  let queue = root ? [root] : [];
  while (queue.length > 0) {
    const next = [];
    let max = -Infinity;
    for (const node of queue) {
      if (node.val > max) max = node.val;
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    result.push(max);
    queue = next;
  }
  return result;
}
