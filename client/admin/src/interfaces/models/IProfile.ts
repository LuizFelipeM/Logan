import { IBase } from './IBase'

export interface IProfile extends IBase {
  name: string
  rules?: number[]
}
