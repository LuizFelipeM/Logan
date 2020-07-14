import User from '../interfaces/Entities/User'
import Profile from '../interfaces/Entities/Profile'

export function UserPermissions (user: User, callback: () => unknown, ...perfis: Profile[]): unknown {
  if (perfis.find(profile => profile.id === user.profile.id)) {
    return callback()
  }
}
