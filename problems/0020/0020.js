/**
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s) {
  const map = { "(": ")", "{": "}", "[": "]" };
  /** @type {Stack<number>} */
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) stack.push(map[s[i]]);
    else {
      if (stack.pop() !== s[i]) return false;
    }
  }

  return stack.top == null;
}

/** @template T */
class LinkedListNode {
  /** @type {T} */
  value;
  /** @type {LinkedListNode<T>} */
  prev;

  /**
   * @param {T} value
   */
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

/** @template T */
class Stack {
  /** @type {LinkedListNode<T>} */
  top;

  /**
   * @param {T} value
   */
  push(value) {
    const temp = new LinkedListNode(value);
    temp.prev = this.top;
    this.top = temp;
  }

  /**
   * @returns {T}
   */
  pop() {
    if (this.top == null) {
      return null;
    }
    const value = this.top.value;
    this.top = this.top.prev;
    return value;
  }
}
