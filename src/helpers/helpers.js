export function setIdFromName(name) {
  const str = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')

  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash = hash >>> 0
  }
  return hash.toString(36)
}
