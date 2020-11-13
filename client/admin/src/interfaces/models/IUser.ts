import { IBase } from './IBase'

export interface IUser extends IBase {
  firstName: string
  lastName: string
  gender: string
  birthDate?: string
  profile?: number
}
