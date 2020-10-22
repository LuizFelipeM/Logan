import { profilesTable } from '../database/common/profilesTable'
import { rulesInProfilesTableName } from '../database/common/rulesInProfilesTable'
import { knex } from '../database/knex/dbConnection'
import { rulesTableName } from '../database/common/rulesTable'
import { jsonArray } from './utils/aggJson'
import { IProfileDto } from '../domain/interfaces/contracts/IProfileDto'
import { AbstractRepository } from './AbstractRepository'
import { IProfile } from '../domain/interfaces/entities/IProfile'

export class ProfileRepository extends AbstractRepository<IProfile> {
  protected readonly table = profilesTable

  getProfileWithRules = async (id: number): Promise<IProfileDto> => await knex(profilesTable)
    .fullOuterJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.profile')
    .fullOuterJoin(`${rulesTableName} as t3`, 't2.rule', 't3.id')
    .select(
      't1.*',
      jsonArray('t3', 'rules')
    )
    .where('t1.id', id)
    .groupBy('t1.id')
    .first()

  getProfilesWithRules = async (): Promise<IProfileDto[]> => await knex(profilesTable)
    .fullOuterJoin(`${rulesInProfilesTableName} as t2`, 't1.id', 't2.profile')
    .fullOuterJoin(`${rulesTableName} as t3`, 't2.rule', 't3.id')
    .select(
      't1.*',
      jsonArray('t3', 'rules')
    )
    .groupBy('t1.id')
}
