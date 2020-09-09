import { IUser } from '../domain/interfaces/IUser'
import { usersTable } from '../database/common/usersTable'
import { AbstractRepository } from './AbstractRepository'

class UserRepo extends AbstractRepository<IUser> {
  constructor () {
    super(usersTable)
  }
}

export const userRepository = new UserRepo()
