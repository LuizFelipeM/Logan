import { IProfile } from '../domain/interfaces/IProfile'
import { profileRepository } from '../respositories/profileRepository'
import { IProfileDto } from '../domain/contracts/IProfileDto'

const getProfile = async (id: number): Promise<IProfileDto> => await profileRepository.getProfileWithRules(id)
const getProfiles = async (limit?: number): Promise<IProfileDto[]> => await profileRepository.getProfilesWithRules(limit)
const createProfile = async (profile: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await profileRepository.insertProfile(profile)

export const profileService = { getProfile, getProfiles, createProfile }
