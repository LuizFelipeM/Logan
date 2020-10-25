import { injectable } from 'inversify'
import { httpGet, httpPost, httpDelete, requestParam, requestBody, interfaces } from 'inversify-express-utils'
import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'
import { AbstractRepository } from '../repositories/AbstractRepository'
import { AbstractService } from '../services/AbstractService'

type Service<T extends IBaseEntity> = AbstractService<T, AbstractRepository<T>>

@injectable()
export abstract class AbstractController<T extends IBaseEntity, S extends Service<T>> implements interfaces.Controller {
  constructor (private readonly service: S) {}

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
