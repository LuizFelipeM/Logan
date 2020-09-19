import { IUser } from '../domain/interfaces/IUser'
import { IUserDto } from '../domain/contracts/IUserDto'
import { UserRepository } from '../repositories/userRepository'
import { toUserDto } from '../domain/mappers/userMapper'
import { AbstractService } from './AbstractService'
import { ProfileRepository } from '../repositories/profileRepository'

export class UserService extends AbstractService<IUser, UserRepository> {
  private readonly profileRepository = new ProfileRepository()

  constructor () {
    super(UserRepository)
  }

  getUsersWithProfile = async (id: number): Promise<IUserDto> => {
    const user = await this.repository.selectById(id)
    const userDto = toUserDto(user)

    if (user) {
      userDto.profile = user.profile ? await this.profileRepository.getProfileWithRules(user.profile) : undefined
    }

    return userDto
  }
}
