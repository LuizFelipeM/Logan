import { IUser } from '../../../domain/interfaces/user/IUser'
import { knex } from '../../../dataAccess/database/knex/dbConnection'
import { usersTable } from './usersTable'

export const getUserById = async (id: string): Promise<IUser> => await knex(usersTable).select('*').where({ id }).first()
