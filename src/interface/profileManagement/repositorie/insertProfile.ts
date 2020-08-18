import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { knex } from '../../../dataAccess/database/knex/dbConnection'
import { profilesTable } from './profilesTable'

export const insertProfile = async (data: Omit<IProfile, 'rules'>): Promise<void> => { await knex(profilesTable).insert(data) }
