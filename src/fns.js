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
 * @param {string | RegExp} delimiter
 */
const split =
	delimiter =>
	/**
	 * @param {string} string
	 */
	string =>
		string.split(delimiter)

/**
 * Pass an argument through
 * @template T
 * @param {T} _
 * @returns {T}
 */
const pass = _ => _

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

export { eqCaseInsensitive, trace, traceJSON, split, pass }
