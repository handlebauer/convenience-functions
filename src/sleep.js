/**
 * @param {number} ms
 * @returns {Promise<void>}
 * @example
 * 	await sleep(1000) // sleep for 1 second
 */
export const sleep = ms => new Promise(res => setTimeout(res, ms))
