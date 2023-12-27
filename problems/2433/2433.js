/**
 * @param {number[]} pref
 * @returns {number[]}
 */
function findArray(pref) {
  if (pref.length <= 0) return [];
  if (pref.length === 1) return [pref[0]];

  let x1 = pref[0];
  let x0 = pref[1];
  for (let i = 1; i < pref.length; i++) {
    x0 = pref[i];
    pref[i] ^= x1;
    x1 = x0;
  }

  return pref;
}
