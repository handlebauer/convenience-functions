// TODO: fix types

/**
 * Pluralize a string
 *
 * @template {string} S
 * @param {S} string
 * @returns {S extends `${infer S}s` ? `${S}s` : `${S}s`}
 * @example
 *   plural('dragon') // 'dragons'
 *   plural('dragons') // 'dragons'
 */
export const plural = string => {
  if (string.endsWith('s') === false) {
    // @ts-ignore
    return `${string}s`
  }
  // @ts-ignore
  return `${string}`
}
