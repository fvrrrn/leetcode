/**
 *
 * @param {string[]} strs
 * @returns {string}
 */
function longestCommonPrefix(strs) {
  let firstWord = strs[0];
  let lastWord = strs[strs.length - 1];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] < firstWord) firstWord = strs[i];
    if (strs[i] > lastWord) lastWord = strs[i];
  }

  const output = [];
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] == lastWord[i]) {
      output.push(firstWord[i]);
    } else {
      break;
    }
  }

  return output.join("");
}
