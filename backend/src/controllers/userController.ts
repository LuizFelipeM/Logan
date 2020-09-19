
import { IUser } from '../domain/interfaces/IUser'
import { UserService, userService } from '../services/userService'
import { AbstractController } from './AbstractController'

class UserController extends AbstractController<IUser, UserService> {
  constructor () {
    super(userService)
  }
}

export const userController = new UserController()
