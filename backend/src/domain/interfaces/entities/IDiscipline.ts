import { IBaseEntity } from './IBaseEntity'

export interface IDiscipline extends IBaseEntity {
    courses: number
    type_discipline:number
    name: string
    workload: number
}
