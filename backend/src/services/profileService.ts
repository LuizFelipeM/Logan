import { IProfile } from '../domain/interfaces/IProfile'
import { IProfileDto } from '../domain/contracts/IProfileDto'
import { ProfileRepository, profileRepository } from '../repositories/profileRepository'
import { AbstractService } from './AbstractService'

export class ProfileService extends AbstractService<IProfile, ProfileRepository> {
  constructor () {
    super(profileRepository)
  }

  getWithRules = async (): Promise<IProfileDto[]> => await profileRepository.getProfilesWithRules()
  getByIdWithRules = async (id: number): Promise<IProfileDto> => {
    if (id) {
      return await profileRepository.getProfileWithRules(id)
    } else {
      throw new Error('Id is not a number')
    }
  }
}

export const profileService = new ProfileService()
