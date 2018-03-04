import snakecase from 'lodash.snakecase'

const serialize = target => {
  if (typeof target === 'object') {
    return Object.keys(target).reduce((prev, curr) => ({
      ...prev,
      [snakecase(curr)]: target[curr]
    }), {})
  }

  return snakecase(target)
}

export default serialize
