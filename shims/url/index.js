const UnsupportedEnvironmentError = new Error(
  'Unsupported operation: this function can only be run in NodeJS'
)

export const url = {
  fileURLToPath: () => {
    throw new UnsupportedEnvironmentError()
  },
  pathToFileURL: () => {
    throw new UnsupportedEnvironmentError()
  },
}
