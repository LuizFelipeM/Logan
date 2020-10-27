import { Override } from '../../../@types/override'
import { IUser } from '../entities/IUser'
import { IProfileDto } from './IProfileDto'

export type IUserDto = Override<IUser, {
  profile?: IProfileDto
}>
