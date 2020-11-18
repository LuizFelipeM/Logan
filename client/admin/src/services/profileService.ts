import { IProfile } from '../interfaces/models/IProfile'
import BaseService from './BaseService'

class ProfileService extends BaseService<IProfile> {
  constructor() {
    super('profile')
  }
}

const profileService = new ProfileService()

export default profileService
