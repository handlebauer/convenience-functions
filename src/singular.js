/**
 * @param {string} string
 * @esxample
 *   singular('dragons') // 'dragon'
 */
export const singular = string =>
  string?.endsWith('s') ? string?.slice(0, -1) : string
