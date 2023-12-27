class SeatManager {
  /** @type {MinHeap<number>} */
  seat;

  /**
   * @param {number} n
   */
  constructor(n) {
    this.seat = new MinHeap();
    for (let i = 1; i <= n; i++) {
      this.seat.push(i);
    }
  }

  /**
   * @returns {number}
   */
  reserve() {
    return this.seat.pop();
  }

  /**
   * @param {number} seatNumber
   */
  unreserve(seatNumber) {
    this.seat.push(seatNumber);
  }
}

/** @template T */
class MinHeap {
  /** @type {T[]} */
  heap = [];

  /**
   * @param {T} el
   */
  push(el) {
    const array = this.heap;
    array.push(el);
    let child = array.length - 1;
    let parent = (child - 1) >> 1;

    while (array[child] < array[parent]) {
      this.swap(array, child, parent);
      child = parent;
      parent = (child - 1) >> 1;
    }
  }

  /**
   * @returns {T | undefined}
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const array = this.heap;
    const target = array[0];
    this.swap(array, 0, array.length - 1);
    array.pop();

    let parent = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      let child = parent * 2 + 1;
      if (child >= array.length) break;

      const rightChild = child + 1;
      if (rightChild < array.length && array[rightChild] < array[child]) {
        child = rightChild;
      }

      if (array[parent] <= array[child]) break;

      this.swap(array, parent, child);
      parent = child;
    }

    return target;
  }

  /**
   * @param {T[]} arr
   * @param {number} i
   * @param {number} j
   */
  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
