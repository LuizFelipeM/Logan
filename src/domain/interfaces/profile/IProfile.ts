import { IRule } from '../rule/IRule'

export interface IProfile {
  id: string
  name: string
  rules?: IRule[]
}
