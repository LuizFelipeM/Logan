import { IProfile } from '../domain/interfaces/IProfile'
import { profilesTable } from '../database/common/profilesTable'
import { rulesInProfilesTableName } from '../database/common/rulesInProfilesTable'
import { knex } from '../database/knex/dbConnection'
import { rulesTableName } from '../database/common/rulesTable'

const getProfile = async (id: number): Promise<IProfile> => await knex(profilesTable)
  .innerJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.idProfile')
  .innerJoin(`${rulesTableName} as t3`, 't2."idRule"', 't3.id')
  .select<IProfile>(
    't1.*',
    knex.raw('ARRAY_AGG(t3.*) as rules')
  )
  .where({ id })
  .groupBy('t1.id')

const getProfiles = async (limit = 15): Promise<IProfile[]> => await knex(profilesTable)
  .innerJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.idProfile')
  .innerJoin(`${rulesTableName} as t3`, 't2."idRule"', 't3.id')
  .select<IProfile[]>(
    't1.*',
    knex.raw('ARRAY_AGG(t3.*) as rules')
  )
  .groupBy('t1.id')
  .limit(limit)

const insertProfile = async (data: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await knex(profilesTable)
  .insert(data)
  .returning('*')
  .first()

export const profileRepository = { getProfile, getProfiles, insertProfile }
