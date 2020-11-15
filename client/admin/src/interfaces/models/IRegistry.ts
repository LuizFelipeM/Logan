import { IBase } from './IBase'

export interface IRegistry extends IBase {
  status: number
  open_registry: string
  end_estimate: string
  period_study: string
  observation: string
  familiar_income: string
  origin_institution: string
}
