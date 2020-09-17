import { AbstractRepository } from '../repositories/AbstractRepository'

export abstract class AbstractService<T, R extends AbstractRepository<T>> {
  protected constructor (private repository: R) {}

  getById = async (id: number): Promise<T> => await this.repository.getById(id)
  getAll = async (): Promise<T[]> => await this.repository.getAll()
  create = (data: Omit<T, 'id'>): Promise<void> => this.repository.insert(data)
  remove = (id: number): Promise<void> => this.repository.delete(id)
}
