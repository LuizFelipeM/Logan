import { IUser } from '../domain/interfaces/IUser'
import { usersTable } from '../database/common/usersTable'
import { AbstractRepository } from './AbstractRepository'

export class UserRepository extends AbstractRepository<IUser> {
  constructor () {
    super(usersTable)
  }
}

export const userRepository = new UserRepository()
