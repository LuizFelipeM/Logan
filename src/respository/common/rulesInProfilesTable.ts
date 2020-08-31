import { knex } from '../../dataAccess/database/knex/dbConnection'

export const rulesInProfilesTableName = 'rules_in_profiles'

export const rulesInProfilesTable = knex(rulesInProfilesTableName)
