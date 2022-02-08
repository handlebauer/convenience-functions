import pkg from './package.json'

const input = './src/index.js'

export default {
  input,
  external: ['url'],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
}
