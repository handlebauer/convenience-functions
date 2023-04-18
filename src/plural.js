/**
 * @param {string} string
 * @esxample
 *   plural('dragon') // 'dragons'
 *   plural('dragons') // 'dragons'
 */
export const plural = string =>
  string.endsWith('s') === false ? `${string}s` : string
