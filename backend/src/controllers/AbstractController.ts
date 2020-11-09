import { injectable } from 'inversify'
import { httpGet, httpPost, httpDelete, requestParam, requestBody, interfaces, BaseHttpController, httpPatch } from 'inversify-express-utils'
import { IBaseEntity } from '../domain/interfaces/entities/IBaseEntity'
import { AbstractRepository } from '../repositories/AbstractRepository'
import { AbstractService } from '../services/AbstractService'

type Service<T extends IBaseEntity> = AbstractService<T, AbstractRepository<T>>

@injectable()
export abstract class AbstractController<T extends IBaseEntity, S extends Service<T>> extends BaseHttpController implements interfaces.Controller {
  constructor (private readonly service: S) { super() }

  @httpGet('/getAll')
  private async getAll () {
    return await this.service.getAll()
  }

  @httpGet('/getById/:id')
  private async getById (@requestParam('id') id: number) {
    return await this.service.getById(id)
  }

  @httpPost('/')
  private async post (@requestBody() body: Omit<T, 'id'>) {
    return await this.service.create(body)
  }

  @httpPatch('/')
  private patch (@requestBody() body: Partial<T>) {
    this.service.updateById(body)
  }

  @httpDelete('/')
  private async delete (@requestBody() body: T) {
    this.service.remove(body)
  }
}
