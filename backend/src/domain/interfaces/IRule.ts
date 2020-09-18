import { IBaseEntity } from './IBaseEntity'

export interface IRule extends IBaseEntity {
  name: string
  profiles?: number[]
}
