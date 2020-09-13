import { IUser } from '../domain/interfaces/IUser'
import { usersTable } from '../database/common/usersTable'
import { knex } from '../database/knex/dbConnection'

const getUserById = async (id: number): Promise<IUser> => await knex(usersTable)
  .select('*')
  .where({ id })
  .first()

const getUsers = async (limit = 15): Promise<IUser[]> => await knex(usersTable)
  .select('*')
  .limit(limit)

const insertUser = async (data: Omit<IUser, 'id'>): Promise<IUser> => await knex(usersTable)
  .insert(data)
  .returning('*')
  .first()

export const userRepository = { getUserById, getUsers, insertUser }
