import { Override } from '../../../@types/override'
import { IProfile } from '../interfaces/IProfile'
import { IRuleDto } from './IRuleDto'

export type IProfileDto = Override<IProfile, {
  rules?: IRuleDto[]
}>
