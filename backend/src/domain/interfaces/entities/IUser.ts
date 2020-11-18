import { IBaseEntity } from './IBaseEntity'

export interface IUser extends IBaseEntity {
  email: string
  password: string
  first_name: string
  last_name: string
  gender: string
  birth_date?: string
  profile?: number
}
