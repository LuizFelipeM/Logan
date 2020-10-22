import { IBaseEntity } from './IBaseEntity'

export interface IDiscipline extends IBaseEntity {
    course: number
    type_discipline:number
    name: string
    workload: number
}
