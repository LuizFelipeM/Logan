import { IBaseEntity } from './IBaseEntity'

export interface IProfile extends IBaseEntity {
  name: string
  rules?: number[]
}
