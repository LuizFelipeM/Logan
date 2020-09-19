import { ParsedQs } from 'qs'
import { IBaseEntity } from '../domain/interfaces/IBaseEntity'
import { AbstractRepository, Filters } from '../repositories/AbstractRepository'
import { FilterTypes } from '../domain/FilterTypes'

export abstract class AbstractService<T extends IBaseEntity, R extends AbstractRepository<T>> {
  protected constructor (protected readonly repository: R) {}

  getById = async (id: number): Promise<T> => await this.repository.selectById(id)
  getAll = async (): Promise<T[]> => await this.repository.selectAll()
  create = (data: Omit<T, 'id' | 'createdAt' | 'lastUpdate'>): Promise<void> => this.repository.insert(data)
  updateById = async (data: T): Promise<void> => this.repository.updateById(data)
  remove = (data: T): Promise<void> => this.repository.delete(data.id)

  filter = async (type: FilterTypes, queryString: ParsedQs): Promise<T[]> => {
    const filters: Filters = {}

    for (const key in queryString) {
      if (Object.prototype.hasOwnProperty.call(queryString, key)) {
        const value = queryString[key]

        if (value) {
          filters[key] = value as string
        }
      }
    }

    return await this.repository.selectByFilter(type, filters)
  }
}
