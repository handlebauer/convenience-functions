export const pipe = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val)
