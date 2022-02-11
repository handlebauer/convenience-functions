// @ts-ignore
import { pathToFileURL } from 'url'

/**
 * @param {string} base Base path with leading forward-slash, `/`
 * @param  {...string} paths One or more paths (leading forward-slash, `/`, optional)
 * @returns {string} A correctly concatted path
 * @example
 *   import { dirname, join } from '@hbauer/convenience-functions'
 *   const dirname = _dirname(import.meta.url)
 *   const pathToFile = join(dir, 'module.js')
 */
export const join = (base, ...paths) =>
  paths.reduce(
    (url, path) =>
      new URL(path.slice(0, 1) === '/' ? path.slice(1) : path, url),
    pathToFileURL(base)
  ).pathname
