import { IUser } from '../interfaces/IUser'
import { IProfileDto } from './IProfileDto'

export interface IUserDto extends Omit<IUser, 'idProfile'> {
  profile?: IProfileDto
}
