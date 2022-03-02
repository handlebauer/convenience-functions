/**
 * @param {*[]} a
 * @param {*[]} b
 * @returns {boolean}
 */
export const shallowEqualUnsortedArrays = (a, b) => {
  if (a.length !== b.length) return false
  const c = new Set(a)
  return b.every(x => c.has(x) && c.delete(x))
}
