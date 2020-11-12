import { IBase } from './IBase'

export interface IStudent extends IBase {
  user: number
  ra: number
  course: number
  class: number
  created_at: string
  last_update: string
}
