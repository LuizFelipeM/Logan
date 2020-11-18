import { IBase } from './IBase'

export interface IDiscipline extends IBase {
    course: number
    type_discipline:number
    name: string
    workload: number
}
