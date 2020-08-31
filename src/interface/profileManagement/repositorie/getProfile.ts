import { profilesTable } from './profilesTable'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { rulesInProfilesTableName } from '../../../respository/common/rulesInProfilesTable'
import { knex } from '../../../dataAccess/database/knex/dbConnection'

export const getProfile = async (id: string): Promise<IProfile> => {
  const prof = await profilesTable
    .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`)
    .select<IProfile>(
      't1.*',
      knex.raw(`ARRAY_AGG(${rulesInProfilesTableName}."idRule") as rules`)
    )
    .where({ id: '75ccf9c0-dcf4-47ac-ad19-49593e1004e8' })
    .groupBy('t1.id')

  console.log('prof', prof)

  return prof
}
