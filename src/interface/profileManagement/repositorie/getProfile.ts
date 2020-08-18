import { knex } from '../../../dataAccess/database/knex/dbConnection'
import { profilesTable } from './profilesTable'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'

export const getProfile = async (id: string): Promise<IProfile> => await knex(profilesTable).select('*').where({ id }).first()
