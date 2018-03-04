export default function deepCloneObject(target) {
  return JSON.parse(JSON.stringify(target))
}
