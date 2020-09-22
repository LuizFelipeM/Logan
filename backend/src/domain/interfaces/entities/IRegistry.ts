import { IBaseEntity } from './IBaseEntity'

export interface IRegistry extends IBaseEntity {
  status: number
  openRegistry: string
  endEstimate: string
  periodStudy: string
  observation: string
  familiarIncome: string
  originInstitution: string
}
