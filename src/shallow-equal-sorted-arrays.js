/**
 * @param {*[]} a
 * @param {*[]} b
 * @returns {boolean}
 */
export const shallowEqualSortedArrays = (a, b) =>
  a.length === b.length && a.every((c, i) => c === b[i])
