import { IProfile } from '../domain/interfaces/IProfile'
import { profileRepository } from '../respositories/profileRepository'

const createProfile = async (profile: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await profileRepository.insertProfile(profile)

export const profileService = { createProfile }
