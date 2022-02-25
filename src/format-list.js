// /** @param {string[]} items @returns {string} */

/**
 * @param {string[]} items
 * @returns {string}
 * @example
 *   formatList(['red', 'blue', 'green']) // 'red, blue, and green'
 */
// @ts-ignore
export const formatList = items => new Intl.ListFormat('en').format(items)
