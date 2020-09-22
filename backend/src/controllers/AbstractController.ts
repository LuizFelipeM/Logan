import { injectable } from 'inversify'
import { httpGet, httpPost, httpDelete, queryParam, requestParam, requestBody, interfaces } from 'inversify-express-utils'
import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'
import { AbstractRepository } from '../repositories/AbstractRepository'
import { AbstractService } from '../services/AbstractService'

@injectable()
export abstract class AbstractController<T extends IBaseEntity, Service extends AbstractService<T, AbstractRepository<T>>> implements interfaces.Controller {
  protected abstract readonly service: Service

  @httpGet('/')
  private async getAll (@queryParam('filters') filters: string) {
    return filters ? await this.service.getAll() : await this.getWithFilters(filters)
  }

  @httpGet('/:id')
  private async getById (@requestParam('id') id: number) {
    const data = await this.service.getById(id)

    return data
  }

  @httpPost('/')
  private post (@requestBody() body: Omit<T, 'id' | 'createdAt' | 'lastUpdate'>) {
    this.service.create(body)
  }

  @httpDelete('/')
  private async delete (@requestBody() body: T) {
    this.service.remove(body)
  }

  private async getWithFilters (filtersString: string) {
    const filters = filtersString.split('$')
      .map(filter => {
        const keyValue = filter.split('=')

        return {
          filter: keyValue[0],
          value: keyValue[1]
        }
      })
  }
}
