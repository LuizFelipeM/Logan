import { IUser } from '../domain/interfaces/IUser'
import { usersTable } from './common/usersTable'

const getUserById = async (id: string): Promise<IUser> => await usersTable
  .select('*')
  .where({ id })
  .first()

const getUsers = async (limit = 15): Promise<IUser[]> => await usersTable
  .select('*')
  .limit(limit)

const insertUser = async (data: Omit<IUser, 'id'>): Promise<IUser> => await usersTable
  .insert(data)
  .returning('*')
  .first()

export const userRepository = { getUserById, getUsers, insertUser }
