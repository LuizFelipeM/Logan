import { injectable } from 'inversify'
import { httpGet, httpPost, httpDelete, requestParam, requestBody, interfaces } from 'inversify-express-utils'
import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'
import { AbstractRepository } from '../repositories/AbstractRepository'
import { AbstractService } from '../services/AbstractService'

@injectable()
export abstract class AbstractController<T extends IBaseEntity, Service extends AbstractService<T, AbstractRepository<T>>> implements interfaces.Controller {
  protected abstract readonly service: Service

  @httpGet('/getAll')
  private async getAll () {
    return await this.service.getAll()
  }

  @httpGet('/getById/:id')
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
}
