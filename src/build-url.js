import { pipe } from './fns.js'

const addParams = params => url => (
  params && (url.search = new URLSearchParams(params)), url
)

const createURL = ({ host, path }) => new URL(path ? `${host}/${path}` : host)

export const buildURL = ({ params, ...rest }) =>
  pipe(rest, createURL, addParams(params))
