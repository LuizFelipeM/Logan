import { knex } from '../../database/knex/dbConnection'

export const rulesInProfilesTableName = 'rules_in_profiles'
export const rulesInProfilesTable = knex({ t1: rulesInProfilesTableName })
