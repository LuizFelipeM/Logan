import { Override } from '../../@types/override'
import { IUser } from '../interfaces/IUser'
import { IProfileDto } from './IProfileDto'

export type IUserDto = Override<IUser, {
  profile: IProfileDto
}>
