import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { profilesTable } from './profilesTable'
import { rulesInProfilesTableName } from '../../../respository/common/rulesInProfilesTable'
import { knex } from '../../../dataAccess/database/knex/dbConnection'

// export const getProfiles = async (limit = 15): Promise<IProfile[]> => await profilesTable
//   .select<IProfile[]>('t1.*', `${rulesInProfilesTableName}.idRule`)
//   .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`) // Precisa ajustar isso aqui pra trazer com array_agg
//   .limit(limit)
export const getProfiles = async (limit = 15): Promise<IProfile[]> => await profilesTable
  .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`)
  .select<IProfile[]>(
    't1.*',
    knex.raw(`ARRAY_AGG(${rulesInProfilesTableName}."idRule") as rules`)
  )
  .groupBy('t1.id')
  .limit(limit)
