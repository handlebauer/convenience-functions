import { writeFile } from 'fs/promises'

/**
 *
 * @param {string} name
 * @param {any} data
 * @returns {Promise<void>}
 * @example
 * 	await writeFileHere('test.html', html)
 */
const writeFileHere = (name, data) => writeFile(name, data)

export { writeFileHere }
