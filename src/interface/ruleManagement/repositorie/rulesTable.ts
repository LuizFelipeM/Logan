import { knex } from '../../../dataAccess/database/knex/dbConnection'

const tableName = 'rules'

export const rulesTable = knex(tableName)
