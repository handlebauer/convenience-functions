import { pipe } from 'remeda'

/**
 * @param {string} string
 * @returns {string}
 */
export const removeTrailingSlash = string =>
  string
    ? string.endsWith('/') === true
      ? removeTrailingSlash(string.slice(0, -1))
      : string
    : null

/**
 * @param {string} string
 * @returns {string}
 */
export const removeLeadingSlash = string =>
  string
    ? string.startsWith('/') === true
      ? removeLeadingSlash(string.slice(1))
      : string
    : null

/**
 * @param {string} string
 */
export const removeSlashes = string =>
  pipe(string, removeTrailingSlash, removeLeadingSlash)
