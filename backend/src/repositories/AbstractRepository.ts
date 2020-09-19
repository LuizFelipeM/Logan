import { knex } from '../database/knex/dbConnection'
import { FilterTypes } from '../domain/FilterTypes'
import { IBaseEntity } from '../domain/interfaces/IBaseEntity'

type Table = string | { t1: string }

export type Filters = { [x: string]: string | string[] }

type RawObject = {
  queryString: string,
  values: any[]
}

function convertFiltersToSql (type: FilterTypes, filters: Filters): RawObject {
  const filterKeys = Object.keys(filters)
  const query = filterKeys.reduce<RawObject>((acc, key, i) => {
    const isArray = Array.isArray(filters[key])
    const queryString = `${acc.queryString}${i !== 0 ? ` ${type} ` : ''}t1."${key}" ${isArray ? `= ANY(${teste(i)})` : `= ${teste(i)}`}`
    const values = [...acc.values, filters[key]]

    return { queryString, values }
  }, {
    queryString: '',
    values: []
  })

  return query
}

function teste (t: number): string {
  let res = '?'

  for (let i = 0; i < t; i++) {
    res += '?'
  }

  return res
}

export abstract class AbstractRepository<T extends IBaseEntity> {
  constructor (protected readonly table: Table) {}

  selectAll = async (): Promise<T[]> => await knex(this.table)
    .select('*')

  selectById = async (id: number): Promise<T> => await knex(this.table)
    .select('*')
    .where({ id })
    .first()

  selectByFilter = async (type: FilterTypes, filters: Filters): Promise<T[]> => {
    const query = convertFiltersToSql(type, filters)

    const a = await knex(this.table)
      .select('*')
      .where(knex.raw(query.queryString, query.values))
      .toSQL()

    return await knex(this.table)
      .where(knex.raw(query.queryString, query.values))
      .select('*')
  }

  insert = async (data: Omit<T, 'id' | 'createdAt' | 'lastUpdate'>): Promise<void> => await knex(this.table)
    .insert(data)

  updateById = async (data: T): Promise<void> => await knex(this.table)
    .where({ id: data.id })
    .update(data)

  delete = async (id: number): Promise<void> => await knex(this.table)
    .where({ id })
    .delete()
}
