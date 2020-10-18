import { IBaseEntity } from './IBaseEntity'

export interface IStudent extends IBaseEntity {
  user: number
  ra: number
  course: number
  class: number
  created_at: string
  last_update: string
}
