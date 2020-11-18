import { IBase } from './IBase'

export interface IUser extends IBase {
  email: string
  password: string
  first_name: string
  last_name: string
  gender: string
  birth_date?: string
  profile?: number
}
