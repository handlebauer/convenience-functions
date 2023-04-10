/**
 *
 * @param {string} string
 * @example
 *   titelize('hello world') // 'Hello World'
 */
export const titleize = string =>
  string
    .split(' ')
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(' ')
