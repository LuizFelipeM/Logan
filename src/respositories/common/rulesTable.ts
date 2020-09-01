import { knex } from '../../database/knex/dbConnection'

export const rulesTableName = 'rules'
export const rulesTable = knex({ t1: rulesTableName })
