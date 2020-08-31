import { IUser } from '../../../domain/interfaces/user/IUser'
import { usersTable } from './usersTable'

export const insertUser = async (data: Omit<IUser, 'profile'>): Promise<void> => { await usersTable.insert(data) }
