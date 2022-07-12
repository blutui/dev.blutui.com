import { ConfigFunction } from '@markdoc/markdoc'

export const includes: ConfigFunction = {
  transform(parameters) {
    const [array, value] = Object.values(parameters)

    return Array.isArray(array) ? array.includes(value) : false
  },
}

export const upper: ConfigFunction = {
  transform(parameters) {
    const string = parameters[0]

    return typeof string === 'string' ? string.toUpperCase() : string
  },
}
