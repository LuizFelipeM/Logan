import { knex } from '../../database/knex/dbConnection'
import { Raw } from 'knex'

export const jsonArray = (tableAlias: string, showAlias?: string, field = '*'): Raw => knex().raw(`TO_JSON(ARRAY_AGG(${tableAlias}.${field})) as ${showAlias}`)
