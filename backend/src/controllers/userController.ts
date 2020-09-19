
import { IUser } from '../domain/interfaces/IUser'
import { UserService } from '../services/userService'
import { AbstractController } from './AbstractController'

class UserController extends AbstractController<IUser, UserService> {
  constructor () {
    super(UserService)
  }
}

export const userController = new UserController()
