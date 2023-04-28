/**
 * Pipe a value through 1+ functions
 * @param {any} val
 * @param  {function[]} fns
 * @returns {any}
 */
const pipe = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val)

/**
 * Map over an array of values using the supplied function
 * @template T
 * @param {(val: T, i: number, arr: T[]) => any} fn
 */
const map =
  fn =>
  /**
   * @param {T[]} arr
   */
  arr =>
    arr.map(fn)

/**
 * Reduce an array of values using the supplied function
 * @template K, T
 * @param {(acc: K, val: K, i: number, arr: K[]) => any} fn
 * @param {T} val
 */
const reduce =
  (fn, val) =>
  /**
   * @param {K[]} arr
   */
  arr =>
    arr.reduce(fn, val)

/**
 * @template {(...args: any[]) => any} F
 * @template A, B
 * @param {F} fn
 */
const flip =
  fn =>
  /**
   * @param {A} a
   */
  a =>
  /**
   * @param {B} b
   */
  b =>
    fn(b)(a)

/**
 * @template T
 * @param {T[][]} arr
 */
const flatten = arr => arr.flat()

/**
 * @param {string} a
 */
const eqCaseInsensitive =
  a =>
  /**
   * @param {string} b
   */
  b =>
    a.toLowerCase() === b.toLowerCase()

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
  reduce,
  flip,
  prop,
  flatten,
  eqCaseInsensitive,
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
