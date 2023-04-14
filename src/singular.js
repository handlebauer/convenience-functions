/**
 * @param {string} string
 * @esxample
 *   singular('dragons') // 'dragon'
 */
export const singular = string => string?.slice(0, -1)
