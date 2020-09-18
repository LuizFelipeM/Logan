import { IUser } from '../domain/interfaces/IUser'
import { IUserDto } from '../domain/contracts/IUserDto'
import { UserRepository, userRepository } from '../repositories/userRepository'
import { profileRepository } from '../repositories/profileRepository'
import { toUserDto } from '../domain/mappers/userMapper'
import { AbstractService } from './AbstractService'

export class UserService extends AbstractService<IUser, UserRepository> {
  constructor () {
    super(userRepository)
  }

  getByIdWithProfile = async (id: number): Promise<IUserDto> => {
    const user = await userRepository.getById(id)
    const userDto: IUserDto = toUserDto(user)

    if (user.profile) {
      userDto.profile = await profileRepository.getProfileWithRules(Number(user.profile))
    }

    return userDto
  }
}

export const userService = new UserService()
