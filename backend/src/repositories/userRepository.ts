import { IUser } from '../domain/interfaces/IUser'
import { usersTable } from '../database/common/usersTable'
import { AbstractRepository } from './AbstractRepository'
import { injectable } from 'inversify'

@injectable()
export class UserRepository extends AbstractRepository<IUser> {
  protected readonly table = usersTable
}
