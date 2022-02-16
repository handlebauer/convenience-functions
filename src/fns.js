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

export { pipe, map }
