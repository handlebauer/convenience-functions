import { pipe } from './fns.js'

const addParams = params => url => (
  params && (url.search = new URLSearchParams(params)), url
)

const createURL = ({ host, path }) => new URL(path ? `${host}/${path}` : host)

/**
 * @param {object} params
 * @param {string} params.host
 * @param {string} [params.path] - Optional
 * @param {Object<string, any>} [params.params] - Optional
 * @returns {URL} A fully qualified URL interface
 * @example
 *   const url = buildURL({
 *     host: 'https://example.com',
 *     path: 'path/to/resource',
 *     params: { hello: 'world' },
 *   })
 */
const buildURL = ({ host, path, params }) =>
  pipe({ host, path }, createURL, addParams(params))

export { buildURL }
