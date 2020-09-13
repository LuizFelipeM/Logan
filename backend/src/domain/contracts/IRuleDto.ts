import { Override } from '../../@types/override'
import { IRule } from '../interfaces/IRule'
import { IProfileDto } from './IProfileDto'

export type IRuleDto = Override<IRule, {
  profiles?: IProfileDto[]
}>
