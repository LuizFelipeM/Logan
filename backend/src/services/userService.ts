import { IUser } from '../domain/interfaces/IUser'
import { IUserDto } from '../domain/contracts/IUserDto'
import { userRepository } from '../repositories/userRepository'
import { profileRepository } from '../repositories/profileRepository'
import { toUserDto } from '../domain/mappers/userMapper'

const getUser = async (id: number): Promise<IUser> => await userRepository.getUserById(id)
const getUsers = async (limit?: number): Promise<IUser[]> => await userRepository.getUsers(limit)
const createUser = async (user: Omit<IUser, 'id'>): Promise<IUser> => await userRepository.insertUser(user)

const getUsersWithProfile = async (id: number): Promise<IUserDto> => {
  const user = await userRepository.getUserById(id)
  const userDto = toUserDto(user)

  if (user) {
    userDto.profile = user.profile ? await profileRepository.getProfileWithRules(user.profile) : undefined
  }

  return userDto
}

export const userService = {
  getUser,
  getUsers,
  getUsersWithProfile,
  createUser
}
