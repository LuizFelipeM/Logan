import { IUser } from '../../../domain/interfaces/user/IUser'
import { usersTable } from './usersTable'

export const getUserById = async (id: string): Promise<IUser> => {
  return await usersTable
    .select('*')
    .where({ id })
    .first()
}
