import { IBaseEntity } from './IBaseEntity'

export interface IStudent extends IBaseEntity {
  user: number
  ra: number
  course: number
  class: number
  createdAt: string
  lastUpdate: string
}
