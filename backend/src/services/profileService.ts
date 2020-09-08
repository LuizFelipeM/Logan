import { IProfile } from '../domain/interfaces/IProfile'
import { profileRepository } from '../repositories/profileRepository'

const createProfile = async (profile: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await profileRepository.insertProfile(profile)

export const profileService = { createProfile }