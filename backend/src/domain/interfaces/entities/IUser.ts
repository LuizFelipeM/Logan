import { IBaseEntity } from './IBaseEntity'

export interface IUser extends IBaseEntity {
  firstName: string
  lastName: string
  gender: string
  birthDate?: string
  profile?: number
}
