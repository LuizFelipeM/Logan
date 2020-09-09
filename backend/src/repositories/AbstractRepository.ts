import { knex } from '../database/knex/dbConnection'

type Table = string | { t1: string }

export abstract class AbstractRepository<T> {
  private table: Table

  constructor (table: Table) {
    this.table = table
  }

  getAll = async (): Promise<T[]> => await knex(this.table).select('*')

  getById = async (id: number): Promise<T> => await knex(this.table)
    .select('*')
    .where({ id })
    .first()

  insert = async (data: Omit<T, 'id'>): Promise<T> => await knex(this.table)
    .insert(data)
    .returning('*')
    .first()

  delete = async (id: number): Promise<T> => await knex(this.table)
    .delete()
    .where({ id })
    .returning('*')
    .first()
}
