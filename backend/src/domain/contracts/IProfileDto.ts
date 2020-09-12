import { IProfile } from '../interfaces/IProfile'
import { IRuleDto } from './IRuleDto'

export interface IProfileDto extends Omit<IProfile, 'rules'> {
  rules?: IRuleDto[]
}
