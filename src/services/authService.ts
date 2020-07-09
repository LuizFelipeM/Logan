import User from '../domain/interfaces/User'

function AccessPermissionType (user: User) {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    if (user.perfil.name === 'professor') {
      descriptor.value = function (...args: any[]) {
        originalMethod.apply(this, args)

        return descriptor
      }
    } else {
      throw new Error('Unauthorized access')
    }
  }
}

export { AccessPermissionType }
