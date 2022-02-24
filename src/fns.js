/**
 * Pipe a value through 1+ functions
 * @param {*} val
 * @param  {function[]} fns
 * @returns {*}
 */
const pipe = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val)

/**
 * Map over an array of values using the supplied function
 * @param {(val: any, i: number, arr: any[]) => any[]} fn
 * @returns {(arr: any[]) => any[]} An array with resulting values
 */
const map = fn => arr => arr.map(fn)

/**
 * Find the intersection of two unsorted arrays
 * @param {any[]} a
 * @param {any[]} b
 * @param {Set<any[]>} c
 * @returns {any[]}
 */
const intersection = (a, b, c) => (
  (c = new Set(a)), b.filter(val => c.has(val))
)

export { pipe, map, intersection }
