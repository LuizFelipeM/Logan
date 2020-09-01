import { IProfile } from '../domain/interfaces/IProfile'
import { profilesTable } from './common/profilesTable'
import { rulesInProfilesTableName } from './common/rulesInProfilesTable'
import { knex } from '../dataAccess/database/knex/dbConnection'

const getProfile = async (id: string): Promise<IProfile> => await profilesTable
  .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`)
  .select<IProfile>(
    't1.*',
    knex.raw(`ARRAY_AGG(${rulesInProfilesTableName}."idRule") as rules`)
  )
  .where({ id })
  .groupBy('t1.id')

const getProfiles = async (limit = 15): Promise<IProfile[]> => await profilesTable
  .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`)
  .select<IProfile[]>(
    't1.*',
    knex.raw(`ARRAY_AGG(${rulesInProfilesTableName}."idRule") as rules`)
  )
  .groupBy('t1.id')
  .limit(limit)

const insertProfile = async (data: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await profilesTable
  .insert(data)
  .returning('*')
  .first()

export const profileRepository = { getProfile, getProfiles, insertProfile }
