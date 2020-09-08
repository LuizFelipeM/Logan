import { IRule } from '../interfaces/IRule'
import { IProfile } from '../interfaces/IProfile'

export interface IProfileDto extends Omit<IProfile, 'rules'> {
  rules?: IRule[]
}
