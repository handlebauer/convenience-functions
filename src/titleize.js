/**
 *
 * @param {string} string
 * @example
 *   titleize('hello world') // 'Hello World'
 * 	 titleize('HELLO WROLD') // 'Hello World'
 */
export const titleize = string =>
  string
    .split(' ')
    .map(s => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join(' ')
