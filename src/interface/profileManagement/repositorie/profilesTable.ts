import { knex } from '../../../dataAccess/database/knex/dbConnection'

export const profilesTableName = 'profiles'
export const profilesTable = knex({ t1: profilesTableName })
