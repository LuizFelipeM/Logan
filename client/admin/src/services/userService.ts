import { IUser } from '../interfaces/models/IUser'
import BaseService from './BaseService'

class UserService extends BaseService<IUser> {
  constructor() {
    super('user')
  }
}

export default new UserService()
