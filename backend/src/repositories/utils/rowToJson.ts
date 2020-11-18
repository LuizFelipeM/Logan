import { Raw } from 'knex'
import { knex } from '../../database/knex/dbConnection'

export const rowToJson = (tableAlias: string, showAlias?: string, field = '*'): Raw => knex().raw(`ROW_TO_JSON(${tableAlias}.${field}) as ${showAlias}`)
