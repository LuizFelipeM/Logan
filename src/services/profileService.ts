import { IProfile } from '../domain/interfaces/IProfile'
import { profileRepository } from '../respositories/profileRepository'

const getProfile = async (id: number): Promise<IProfile> => await profileRepository.getProfileWithRules(id)
const getProfiles = async (limit?: number): Promise<IProfile[]> => await profileRepository.getProfilesWithRules(limit)
const createProfile = async (profile: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await profileRepository.insertProfile(profile)

export const profileService = { getProfile, getProfiles, createProfile }
