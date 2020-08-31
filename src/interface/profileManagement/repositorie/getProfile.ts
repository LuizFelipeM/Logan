import { profilesTable } from './profilesTable'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { rulesInProfilesTableName } from '../../../respository/common/rulesInProfilesTable'
import { knex } from '../../../dataAccess/database/knex/dbConnection'

export const getProfile = async (id: string): Promise<IProfile> => await profilesTable
  .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`)
  .select(
    't1.id',
    knex.raw(`ARRAY_AGG(${rulesInProfilesTableName}."idRule") as rules`)
  )
  .where('t1.id', id)
  .groupBy('t1.id')
