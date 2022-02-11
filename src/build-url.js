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
 * @param {Object} param
 * @param {string} param.host
 * @param {string} param.path
 * @returns
 */
const constructURL = ({ host, path }) =>
  new URL(path ? `${host}/${path}` : host)

/**
 * @param {Object} params
 * @param {string} params.host
 * @param {string} [params.path] - Optional
 * @param {Record<string,string>} [params.params] - Optional
 * @returns {URL|Object} A fully qualified URL interface
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
