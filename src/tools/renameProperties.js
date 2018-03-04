/* eslint-disable-file no-prototype-builtins: 0 */

const renameProperties = (target, properties) => {
  const targetClone = JSON.parse(JSON.stringify(target))

  Object.keys(properties).forEach(key => {
    if (!targetClone.hasOwnProperty(key)) {
      throw `unable to rename the prop [${key}], the property is missing on the target object`
    }

    Object.defineProperty(
      targetClone,
      properties[key],
      Object.getOwnPropertyDescriptor(targetClone, key)
    )
    delete targetClone[key]
  })

  return targetClone
}

export default renameProperties
