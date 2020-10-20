import { inject } from 'inversify'
import { IUserDto } from '../domain/contracts/IUserDto'
import { UserRepository } from '../repositories/UserRepository'
import { toUserDto } from '../domain/mappers/userMapper'
import { AbstractService } from './AbstractService'
import { ProfileRepository } from '../repositories/ProfileRepository'
import { IUser } from '../domain/interfaces/entities/IUser'

export class UserService extends AbstractService<IUser, UserRepository> {
  constructor (
    @inject(UserRepository)
    protected readonly userRepository: UserRepository,

    @inject(ProfileRepository)
    private readonly profileRepository: ProfileRepository
  ) { super(userRepository) }

  getUserWithProfile = async (id: number): Promise<IUserDto> => {
    const user = await this.userRepository.selectById(id)
    const profileDto = user?.profile ? await this.profileRepository.getProfileWithRules(user.profile) : undefined
    const userDto = toUserDto(user, profileDto)

    return userDto
  }
}
