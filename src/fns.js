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
 * Return a property by name
 * @param {string} string
 * @returns {(obj: { [key: string]: any }) => any}
 */
const prop = string => obj =>
  string.split('.').reduce((acc, key) => acc?.[key], obj)

/**
 * @template T
 * @param {T} val
 */
const trace = val => (console.log(val), val)

/**
 * Pass an argument through
 * @param {*} _
 * @returns {*}
 */
const pass = _ => _

/**
 * @template T
 * @param {Array<T>} first
 */
const first = ([first]) => first

/**
 * @template O
 * @param {O} a
 */
const assignTo =
  a =>
  /**
   * @template K
   * @param {K} b
   * @returns {O & K}
   */
  b =>
    Object.assign(a, b)

/**
 * Find the intersection of two unsorted arrays
 * @param {any[]} a
 * @param {any[]} b
 * @param {Set<any[]>} [c]
 * @returns {any[]}
 */
const intersection = (a, b, c) => (
  (c = new Set(a)), b.filter(val => c.has(val))
)

/**
 * @template {string} K
 * @param {K} key
 */
const groupBy =
  key =>
  /**
   * @template {any[]} E
   * @param {E} arr
   * @returns {Record<K, E[number]>[]}
   */
  arr =>
    arr.reduce((acc, val) => ({ ...acc, [val[key]]: val }), {})

/**
 * @template {string[] | readonly string[]} K
 * @param {K} keys
 */
const zipInto =
  keys =>
  /**
   * @template {any[] | readonly any[]} E
   * @param {E} arr
   * @returns {{ [key in K[number]]: E[number] }}
   */
  arr =>
    arr.reduce((acc, val, i) => ({ ...acc, [keys[i]]: val }), {})

export {
  pipe,
  map,
  prop,
  trace,
  pass,
  first,
  assignTo,
  intersection,
  groupBy,
  zipInto,
}
