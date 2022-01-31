/**
 * Pipe a value through 1+ functions
 * @param {any} val
 * @param  {function[]} fns
 * @returns {any}
 */
const pipe = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val)

export { pipe }
