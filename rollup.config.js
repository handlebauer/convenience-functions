import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'

const input = './src/index.js'

export default [
  {
    input,
    output: {
      file: pkg.exports.browser,
      format: 'iife',
    },
    plugins: [resolve({ preferBuiltins: false, browser: true })],
  },
  {
    input,
    external: ['url'],
    output: [
      { file: pkg.exports.require, format: 'cjs' },
      { file: pkg.exports.import, format: 'esm' },
    ],
  },
]
