import { usersTable } from '../database/common/usersTable'
import { AbstractRepository } from './AbstractRepository'
import { IUser } from '../domain/interfaces/entities/IUser'

export class UserRepository extends AbstractRepository<IUser> {
  protected readonly table = usersTable
}
