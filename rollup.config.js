import pkg from './package.json'

const input = './src/index.js'

export default {
  input,
  output: [
    { file: pkg.exports.require, format: 'cjs' },
    { file: pkg.exports.import, format: 'esm' },
  ],
}
