/**
 * @param {string[]} items
 * @param {'conjunction' | 'disjunction'} [type]
 * @returns {string}
 * @example
 *   formatList(['red', 'blue', 'green']) // 'red, blue, and green'
 */
export const formatList = (items, type = 'conjunction') =>
	new Intl.ListFormat('en', { type }).format(items)
