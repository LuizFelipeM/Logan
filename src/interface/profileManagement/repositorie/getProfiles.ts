import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { knex } from '../../../dataAccess/database/knex/dbConnection'
import { profilesTable } from './profilesTable'

export const getProfiles = async (limit = 15): Promise<IProfile[]> => await knex(profilesTable).select('*').limit(limit)
