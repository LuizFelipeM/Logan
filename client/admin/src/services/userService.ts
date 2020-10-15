import { IUser } from '../interfaces/IUser'
import BaseService from './BaseService'

class UserService extends BaseService<IUser> {
  constructor() {
    super('user')
  }
}

const userService = new UserService()

export default userService
