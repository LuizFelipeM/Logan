import { IBaseEntity } from './IBaseEntity'

export interface ICourse extends IBaseEntity {
  campus: number
  name: string
  totalSemester: number
}
