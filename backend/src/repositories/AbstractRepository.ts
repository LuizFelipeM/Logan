import { knex } from '../database/knex/dbConnection'

type Table = string | { t1: string }

export abstract class AbstractRepository<T> {
  constructor (private table: Table) {}

  getAll = async (): Promise<T[]> => await knex(this.table).select('*')

  getById = async (id: number): Promise<T> => await knex(this.table)
    .select('*')
    .where({ id })
    .first()

  insert = async (data: Omit<T, 'id'>): Promise<void> => {
    await knex(this.table)
      .insert(data)
  }

  delete = async (id: number): Promise<void> => await knex(this.table)
    .where({ id })
    .delete()
}
