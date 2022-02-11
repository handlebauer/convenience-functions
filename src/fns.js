/**
 * Pipe a value through 1+ functions
 * @param {any} val
 * @param  {function[]} fns
 * @returns {any}
 */
const pipe = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val)

/**
 * Map over an array of values using the supplied function
 * @param {function|any} fn
 * @returns {(arr: any[]) => any[]} An array with resulting values
 */
const map = fn => arr => arr.map(fn)

export { pipe, map }
