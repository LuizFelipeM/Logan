/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function toCamelCase (obj: any): any {
  const newObj: any = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      const newKeyName = key
        .replace(
          /([-_][a-z])/g,
          group => group
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
        )

      newObj[newKeyName] = value
    }
  }

  return newObj
}
