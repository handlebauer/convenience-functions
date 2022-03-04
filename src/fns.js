/**
 * Pipe a value through 1+ functions
 * @param {any} val
 * @param  {function[]} fns
 * @returns {any}
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
 * @template T
 * @param {T} val
 */
const traceJSON = val => (console.log(JSON.stringify(val, null, 2)), val)

/**
 * Pass an argument through
 * @param {any} _
 * @returns {any}
 */
const pass = _ => _

/** @type {(a: any) => (b: any) => boolean} */
const equals = a => b => a === b

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
 * @template A
 * @param {A[]} arr
 * @returns {A[]}
 */
const reverse = arr => arr.map((_, i) => arr.at(-i - 1))

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
  traceJSON,
  equals,
  pass,
  first,
  assignTo,
  intersection,
  reverse,
  groupBy,
  zipInto,
}
