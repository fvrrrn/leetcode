/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
export function addTwoNumbers(l1, l2) {
  if (!l1 || !l2) return null;

  const l3 = new ListNode();
  let current1 = l1;
  let current2 = l2;
  let current3 = l3;
  let carry = 0;

  while (current1) {
    const sum = current1.val + current2.val + carry;
    if (sum < 10) {
      current3.val = sum;
      carry = 0;
    } else {
      current3.val = sum - 10;
      carry = 1;
    }

    if (!current1.next && !current2.next) {
      if (carry > 0) {
        current3.next = new ListNode(carry);
      }
      break;
    }
    current1 = current1.next || new ListNode();
    current2 = current2.next || new ListNode();
    current3.next = new ListNode();
    current3 = current3.next;
  }

  return l3;
}

class ListNode {
  /** @type {number} */
  val;
  /** @type {ListNode | null} */
  next;
  /**
   *
   * @param {number} [val]
   * @param {ListNode | null} [next]
   */
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
