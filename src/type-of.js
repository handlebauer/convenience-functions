/**
 * Very much like `typeof` can tell the difference between objects and arrays
 * @param {any} operand The value to be checked against
 * @returns {string} A string indicating the type, e.g. 'undefined'
 * @example
 *  if (typeOf(randomValue) === 'string') {
 *    console.log("randomValue isn't a string")
 *    console.log(`it's a ${typeOf(randomValue)}`)
 *  }
 */
const typeOf = operand =>
  Object.prototype.toString.call(operand).slice(8, -1).toLowerCase()

export { typeOf }
