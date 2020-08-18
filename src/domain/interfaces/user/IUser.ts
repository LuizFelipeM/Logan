import { IProfile } from '../profile/IProfile'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  gender: string
  birthDate?: string
  profile?: IProfile
}
