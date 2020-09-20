
import { inject } from 'inversify'
import { controller, interfaces, httpGet, httpPost, httpDelete, queryParam, requestParam, requestBody } from 'inversify-express-utils'
import { UserService } from '../services/userService'
import { IUser } from '../domain/interfaces/IUser'
import { AbstractController } from './AbstractController'

// export class UserController extends AbstractController<IUser, UserService>

@controller('/user')
export class UserController implements interfaces.Controller {
  constructor (
    @inject(UserService)
    protected readonly service: UserService
  ) {}

  @httpGet('/')
  private async getAll () {
    return await this.service.getAll()
  }

  @httpGet('/:id')
  private async getById (@requestParam('id') id: number) {
    const data = await this.service.getById(id)

    return data
  }

  @httpPost('/')
  private post (@requestBody() body: Omit<IUser, 'id' | 'createdAt' | 'lastUpdate'>) {
    this.service.create(body)
  }

  @httpDelete('/')
  private async delete (@requestBody() body: IUser) {
    this.service.remove(body)
  }
}
