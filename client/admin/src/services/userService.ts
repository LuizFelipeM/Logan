import { IUser } from '../interfaces/models/IUser'
import BaseService from './BaseService'

enum EndpointEnum {
  auth = '/auth'
}

class UserService extends BaseService<IUser> {
  constructor() {
    super('user')
  }

  authenticate = (email: string, password: string) => this.POST(EndpointEnum.auth, { email, password })
}

const userService = new UserService()

export default userService
