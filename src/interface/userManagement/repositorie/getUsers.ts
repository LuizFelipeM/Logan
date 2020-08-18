import { knex } from '../../../dataAccess/database/knex/dbConnection'
import { usersTable } from './usersTable'
import { IUser } from '../../../domain/interfaces/user/IUser'

export const getUsers = async (limit = 15): Promise<IUser[]> => await knex(usersTable).select('*').limit(limit)
