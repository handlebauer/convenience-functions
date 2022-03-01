const UnsupportedEnvironmentError = new Error(
  'Unsupported operation: this function can only be run in NodeJS'
)

export const fileURLToPath = () => {
  throw new UnsupportedEnvironmentError()
}

export const pathToFileURL = () => {
  throw new UnsupportedEnvironmentError()
}
