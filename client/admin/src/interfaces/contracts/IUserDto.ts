import { IProfileDto } from './IProfileDto'

export type IUserDto = {
  id: number
  email: string
  password: string
  first_name: string
  last_name: string
  gender: string
  birth_date?: string
  profile?: IProfileDto
  created_at?: string,
  last_update?: string
}
