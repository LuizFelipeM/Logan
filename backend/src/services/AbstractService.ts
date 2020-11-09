import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'
import { AbstractRepository } from '../repositories/AbstractRepository'
import { injectable } from 'inversify'

type Repository<T extends IBaseEntity> = AbstractRepository<T>

@injectable()
export abstract class AbstractService<T extends IBaseEntity, R extends Repository<T>> {
  constructor (private readonly repository: R) {}

  getById = async (id: number): Promise<T> => await this.repository.selectById(id)
  getAll = async (): Promise<T[]> => await this.repository.selectAll()
  create = (data: Omit<T, 'id'>): Promise<{ id: number }> => this.repository.insert(data)
  updateById = async (data: Partial<T>): Promise<void> => this.repository.updateById(data)
  remove = (data: T): Promise<void> => this.repository.delete(data.id)
}
