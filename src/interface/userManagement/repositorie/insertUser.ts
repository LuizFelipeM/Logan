import { IUser } from '../../../domain/interfaces/user/IUser'
import { knex } from '../../../dataAccess/database/knex/dbConnection'
import { usersTable } from './usersTable'

export const insertUser = async (data: Omit<IUser, 'profile'>): Promise<void> => { await knex(usersTable).insert(data) }
