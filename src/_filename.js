/**
 * @param {string} fileURL i.e. import.meta.url
 * @returns {string} The path to the caller's file
 * @example
 *   const filename = _filename(import.meta.url) // = /path/to/caller/file.js
 */
const _filename = fileURL => new URL('', fileURL).pathname

export { _filename }
