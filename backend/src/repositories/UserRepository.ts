import { usersTable } from '../database/common/usersTable'
import { AbstractRepository } from './AbstractRepository'
import { IUser } from '../domain/interfaces/entities/IUser'
import { profilesTableName } from '../database/common/profilesTable'
import { IUserDto } from '../domain/interfaces/contracts/IUserDto'

export class UserRepository extends AbstractRepository<IUser> {
  constructor () {
    super(usersTable)
  }

  selectByEmail = async (email: string): Promise<IUserDto | undefined> => await this.session
    .select('*')
    .innerJoin(`${profilesTableName} as t2`, 't2.id', 't1.profile')
    .where({ email })
    .first()
}
