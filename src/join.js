/**
 * @param {string} base Base path with leading forward-slash, `/`
 * @param  {...string} paths One or more paths (leading forward-slash, `/`, optional)
 * @returns {string} A correctly concatted path
 * @example
 *   import { dirname, join } from '@hbauer/convenience-functions'
 *   const dirname = _dirname(import.meta.url)
 *   const pathToFile = join(dirname, 'module.js')
 */
export const join = (base, ...paths) =>
  paths.reduce(
    (url, path) => new URL(path.startsWith('/') ? path.slice(1) : path, url),
    new URL(`file://${base}`)
  ).pathname
