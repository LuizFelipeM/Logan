import { IProfile } from '../domain/interfaces/IProfile'
import { IProfileDto } from '../domain/contracts/IProfileDto'
import { profileRepository } from '../repositories/profileRepository'

const getProfile = async (id: number): Promise<IProfileDto> => await profileRepository.getProfileWithRules(id)
const getProfiles = async (): Promise<IProfileDto[]> => await profileRepository.getProfilesWithRules()
const createProfile = (profile: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => profileRepository.insert(profile)

export const profileService = {
  getProfile,
  getProfiles,
  createProfile
}
