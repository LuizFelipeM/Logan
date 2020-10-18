import { IBaseEntity } from './IBaseEntity'

export interface IUser extends IBaseEntity {
  first_name: string
  last_name: string
  gender: string
  birth_date?: string
  profile?: number
}
