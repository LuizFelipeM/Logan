import { IProfile } from '../domain/interfaces/IProfile'
import { IProfileDto } from '../domain/contracts/IProfileDto'
import { ProfileRepository } from '../repositories/profileRepository'
import { AbstractService } from './AbstractService'

export class ProfileService extends AbstractService<IProfile, ProfileRepository> {
  constructor () {
    super(ProfileRepository)
  }

  getWithRules = async (): Promise<IProfileDto[]> => await this.repository.getProfilesWithRules()
  getByIdWithRules = async (id: number): Promise<IProfileDto> => {
    if (id) {
      return await this.repository.getProfileWithRules(id)
    } else {
      throw new Error('Id is not a number')
    }
  }
}
