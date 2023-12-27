class MyHashMap {
  /** @type {Object} */
  map;

  constructor() {
    this.map = {};
  }

  /**
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    this.map[key] = value;
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    const result = this.map[key];
    if (result == null) return -1;
    return result;
  }

  /**
   *
   * @param {number} key
   */
  remove(key) {
    this.map[key] = undefined;
  }
}
