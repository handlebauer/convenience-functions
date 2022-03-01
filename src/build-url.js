import { pipe } from './fns.js'

/**
 * @param {Record<string, string>} params
 * @returns {(url: URL) => URL}
 */
const addParams = params => url => (
  // @ts-ignore
  params && (url.search = new URLSearchParams(params)), url
)

/**
 * @param {{ host: string, path: string }} param
 * @returns {URL}
 */
const constructURL = ({ host, path }) =>
  new URL(path ? `${host}/${path}` : host)

/**
 * @param {{ host: string, path?: string, params?: { [key: string]: string } }} param
 * @returns {URL} A fully qualified URL interface
 * @example
 *   const url = buildURL({
 *     host: 'https://example.com',
 *     path: 'path/to/resource',
 *     params: { hello: 'world' },
 *   })
 */
const buildURL = ({ host, path, params }) =>
  pipe({ host, path }, constructURL, addParams(params))

export { buildURL }
