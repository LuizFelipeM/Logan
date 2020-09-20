import { inject, injectable } from 'inversify'
import { IUser } from '../domain/interfaces/IUser'
import { IUserDto } from '../domain/contracts/IUserDto'
import { UserRepository } from '../repositories/userRepository'
import { toUserDto } from '../domain/mappers/userMapper'
import { AbstractService } from './AbstractService'
import { ProfileRepository } from '../repositories/profileRepository'

@injectable()
export class UserService extends AbstractService<IUser, UserRepository> {
  constructor (
    @inject(UserRepository)
    protected readonly repository: UserRepository,

    @inject(ProfileRepository)
    private readonly profileRepository: ProfileRepository
  ) {
    super()
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
