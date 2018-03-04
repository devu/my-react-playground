import camelCase from 'lodash.camelcase'
import deepCloneObject from './deepCloneObject'

const parse = target => {
  if (typeof target === 'object') {
    return parseObject(target)
  }

  return camelCase(target)
}

const parseObject = target => {
  const clonedTarget = deepCloneObject(target)

  if (target instanceof Array) return target.map(element => parse(element))

  return Object.keys(clonedTarget).reduce((prev, curr) => {
    if (clonedTarget[curr] !== null && typeof clonedTarget[curr] === 'object') {
      clonedTarget[curr] = parse(clonedTarget[curr])
    }
    return {
      ...prev,
      [camelCase(curr)]: clonedTarget[curr]
    }
  }, {})
}

export default parse
