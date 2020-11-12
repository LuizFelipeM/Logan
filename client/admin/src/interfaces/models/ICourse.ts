import { IBase } from './IBase'

export interface ICourse extends IBase {
  campus: number
  name: string
  total_semester: number
}
