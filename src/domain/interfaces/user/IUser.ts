import { IProfile } from '../profile/IProfile'

export interface IUser {
  id: string
  name: string
  gender: string
  birthDate?: string
  profile?: IProfile
}
