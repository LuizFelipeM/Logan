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
    protected readonly repository: UserRepository,

    @inject(ProfileRepository)
    private readonly profileRepository: ProfileRepository
  ) { super() }

  getUsersWithProfile = async (id: number): Promise<IUserDto> => {
    const user = await this.repository.selectById(id)
    const profile = user.profile ? await this.profileRepository.getProfileWithRules(user.profile) : undefined
    const userDto = toUserDto(user, profile)

    return userDto
  }
}
