import { IProfile } from '../domain/interfaces/IProfile'
import { profilesTable } from './common/profilesTable'
import { knex } from '../database/knex/dbConnection'
import { rulesInProfilesTableName } from './common/rulesInProfilesTable'
import { rulesTableName } from './common/rulesTable'

const getProfileWithRules = async (id: number): Promise<IProfile> => await knex(profilesTable)
  .fullOuterJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.idProfile')
  .fullOuterJoin(`${rulesTableName} as t3`, 't2.idRule', 't3.id')
  .select(
    't1.*',
    knex.raw('TO_JSON(ARRAY_AGG(t3.*)) as rules')
  )
  .where('t1.id', id)
  .groupBy('t1.id')
  .first()

const getProfilesWithRules = async (limit = 15): Promise<IProfile[]> => await knex(profilesTable)
  .fullOuterJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.idProfile')
  .fullOuterJoin(`${rulesTableName} as t3`, 't2.idRule', 't3.id')
  .select<IProfile[]>(
    't1.*',
    knex.raw('TO_JSON(ARRAY_AGG(t3.*)) as rules')
  )
  .groupBy('t1.id')
  .limit(limit)

const insertProfile = async (data: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await knex(profilesTable)
  .insert(data)
  .returning('*')
  .first()

export const profileRepository = { getProfileWithRules, getProfilesWithRules, insertProfile }
