/**
 * @param {string} s
 * @returns {string}
 */
function removeDuplicateLetters(s) {
  const map = new Map();

  const freq = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    while (
      stack.length !== 0 &&
      !(freq.has(s[i]) && freq.get(s[i])) &&
      s[stack[stack.length - 1]] >= s[i] &&
      map.get(s[stack[stack.length - 1]]) > i
    ) {
      freq.set(s[stack[stack.length - 1]], false);
      stack.pop();
    }
    if (!(freq.has(s[i]) && freq.get(s[i]))) {
      stack.push(i);
      freq.set(s[i], true);
    }
  }

  const output = [];
  for (const num of stack) {
    output.push(s[num]);
  }

  return output.join("");
}
