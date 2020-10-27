/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function toSnakeCase (obj: any) {
  const newObj: any = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      const newKeyName = key
        .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

      newObj[newKeyName] = value
    }
  }

  return newObj
}
