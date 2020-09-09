import { IProfileDto } from '../contracts/IProfileDto'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  gender: string
  birthDate?: string
  profile?: number | IProfileDto
}
