import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { profilesTable } from './profilesTable'

export const insertProfile = async (data: Omit<IProfile, 'rules'>): Promise<void> => { await profilesTable.insert(data) }
