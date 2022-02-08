/**
 * @param {string} fileURL i.e. import.meta.url
 * @returns {string} The path to the caller's directory
 * @example
 *   const dirname = _dirname(import.meta.url) // = /path/to/caller/directory
 */
const _dirname = fileURL => new URL('.', fileURL).pathname

export { _dirname }
