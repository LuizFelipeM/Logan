import { IBase } from './IBase'

export interface IRule extends IBase {
  name: string
  profiles?: number[]
}
