import { IProfile } from '../domain/interfaces/IProfile'
import { profilesTable } from '../database/common/profilesTable'
import { rulesInProfilesTableName } from '../database/common/rulesInProfilesTable'
import { knex } from '../database/knex/dbConnection'
import { rulesTableName } from '../database/common/rulesTable'
import { jsonArray } from './utils/aggJson'
import { IProfileDto } from '../domain/contracts/IProfileDto'

const getProfile = async (id: number): Promise<IProfile> => await knex(profilesTable)
  .select('*')
  .where('t1.id', id)
  .first()

const getProfiles = async (limit = 15): Promise<IProfile[]> => await knex(profilesTable)
  .select('*')
  .limit(limit)

const getProfileWithRules = async (id: number): Promise<IProfileDto> => await knex(profilesTable)
  .fullOuterJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.profile')
  .fullOuterJoin(`${rulesTableName} as t3`, 't2.rule', 't3.id')
  .select(
    't1.*',
    jsonArray('t3', 'rules')
  )
  .where('t1.id', id)
  .groupBy('t1.id')
  .first()

const getProfilesWithRules = async (limit = 15): Promise<IProfileDto[]> => await knex(profilesTable)
  .fullOuterJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.profile')
  .fullOuterJoin(`${rulesTableName} as t3`, 't2.rule', 't3.id')
  .select(
    't1.*',
    jsonArray('t3', 'rules')
  )
  .groupBy('t1.id')
  .limit(limit)

const insertProfile = async (data: Omit<IProfile, 'id' | 'rules'>): Promise<IProfile> => await knex(profilesTable)
  .insert(data)
  .returning('*')
  .first()

export const profileRepository = {
  getProfile,
  getProfiles,
  getProfileWithRules,
  getProfilesWithRules,
  insertProfile
}
