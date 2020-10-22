import { Override } from '../../../@types/override'
import { IRule } from '../entities/IRule'
import { IProfileDto } from './IProfileDto'

export type IRuleDto = Override<IRule, {
  profiles?: IProfileDto[]
}>
