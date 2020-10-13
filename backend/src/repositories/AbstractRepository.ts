import { injectable } from 'inversify'
import { toCamelCase } from './utils/toCamelCase'
import { Table } from '../@types/Table'
import { knex } from '../database/knex/dbConnection'
import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'
import { toSnakeCase } from './utils/toSnakeCase'

@injectable()
export abstract class AbstractRepository<T extends IBaseEntity> {
  protected abstract readonly table: Table

  selectAll = async (): Promise<T[]> => (await knex(this.table)
    .select('*'))
    .map(toCamelCase)

  selectById = async (id: number): Promise<T> => toCamelCase(
    await knex(this.table)
      .select('*')
      .where({ id })
      .first()
  )

  insert = async (data: Omit<T, 'id' | 'createdAt' | 'lastUpdate'>): Promise<void> => await knex(this.table)
    .insert(toSnakeCase(data))

  updateById = async (data: T): Promise<void> => await knex(this.table)
    .where({ id: data.id })
    .update(toSnakeCase(data))

  delete = async (id: number): Promise<void> => await knex(this.table)
    .where({ id })
    .delete()
}
