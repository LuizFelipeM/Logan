
import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { IUser } from '../domain/interfaces/entities/IUser'
import { UserService } from '../services/UserService'
import { AbstractController } from './AbstractController'

@controller('/user')
export class UserController extends AbstractController<IUser, UserService> {
  constructor (
    @inject(UserService)
    protected readonly service: UserService
  ) { super() }
}
