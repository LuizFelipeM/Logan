import { knex } from '../../database/knex/dbConnection'

export const usersTableName = 'users'
export const usersTable = knex({ t1: usersTableName })
