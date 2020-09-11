import { IUser } from '../interfaces/IUser'
import { Override } from '../../@types/override'
import { IProfileDto } from './IProfileDto'

export type IUserDto = Override<IUser, {
  profile: IProfileDto
}>
