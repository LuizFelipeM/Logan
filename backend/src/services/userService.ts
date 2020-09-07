import { IUser } from '../domain/interfaces/IUser'
import { userRepository } from '../repositories/userRepository'

const getUsers = async (limit?: number): Promise<IUser[]> => await userRepository.getUsers(limit)

const createUser = async (user: Omit<IUser, 'id'>): Promise<IUser> => await userRepository.insertUser(user)

export const userService = {
  getUsers,
  createUser
}
