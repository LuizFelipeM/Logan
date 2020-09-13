import { IUser } from '../domain/interfaces/IUser'
import { IUserDto } from '../domain/contracts/IUserDto'
import { userRepository } from '../repositories/userRepository'
import { profileRepository } from '../repositories/profileRepository'
import { toUserDto } from '../domain/mappers/userMapper'

const getUser = async (id: number): Promise<IUser> => await userRepository.getById(id)
const getUsers = async (): Promise<IUser[]> => await userRepository.getAll()
const createUser = async (user: Omit<IUser, 'id'>): Promise<IUser> => await userRepository.insert(user)
const removeUser = (id: number): unknown => userRepository.delete(id)

const getUsersWithProfile = async (id: number): Promise<IUserDto> => {
  const user = await userRepository.getById(id)
  const userDto: IUserDto = toUserDto(user)

  if (user) {
    userDto.profile = user.profile ? await profileRepository.getProfileWithRules(Number(user.profile)) : undefined
  }

  return userDto
}

export const userService = {
  getUser,
  getUsers,
  getUsersWithProfile,
  createUser,
  removeUser
}
