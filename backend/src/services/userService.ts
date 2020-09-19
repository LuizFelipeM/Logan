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

  getUsersWithProfile = async (id: number): Promise<IUserDto> => {
    const user = await this.repository.selectById(id)
    const userDto = toUserDto(user)
    if (user) {
      userDto.profile = user.profile ? await profileRepository.getProfileWithRules(user.profile) : undefined
    }

    return userDto
  }
}

export const userService = new UserService()
