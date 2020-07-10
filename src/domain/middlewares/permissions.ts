import User from '../interfaces/Entities/User'

export function UserPermissions (user: User, callback: () => unknown): unknown {
  if (user.perfil.name === 'professor') {
    return callback()
  }
}
