import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { profilesTable } from './profilesTable'
import { rulesInProfilesTableName } from '../../../respository/common/rulesInProfilesTable'

export const getProfiles = async (limit = 15): Promise<IProfile[]> => await profilesTable
  .select<IProfile[]>('t1.*', `${rulesInProfilesTableName}.idRule`)
  .innerJoin(rulesInProfilesTableName, 't1.id', `${rulesInProfilesTableName}.idProfile`) // Precisa ajustar isso aqui pra trazer com array_agg
  .limit(limit)
