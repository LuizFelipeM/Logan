import { injectable, unmanaged } from 'inversify'
import { Table } from '../@types/Table'
import { knex } from '../database/knex/dbConnection'
import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'

@injectable()
export abstract class AbstractRepository<T extends IBaseEntity> {
  protected readonly table: Table

  constructor (
    @unmanaged()
      table: Table,
    @unmanaged()
    protected readonly session = knex<T>()(table),
    @unmanaged()
    private readonly abstractSession = knex<unknown>()(table)
  ) {
    this.table = table
  }

  selectAll = async (): Promise<T[]> =>
    await this.abstractSession
      .select('*')

  selectById = async (id: number): Promise<T> =>
    await this.abstractSession
      .select('*')
      .where({ id })
      .first()

  insert = async (data: Omit<T, 'id' | 'createdAt' | 'lastUpdate'>): Promise<void> =>
    await this.abstractSession
      .insert(data)

  updateById = async (data: T): Promise<void> =>
    await this.abstractSession
      .where({ id: data.id })
      .update(data)

  delete = async (id: number): Promise<void> =>
    await this.abstractSession
      .where({ id })
      .delete()
}
