import { IUser } from '../interfaces/IUser'
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

export default new UserService()
