import { IBaseEntity } from './IBaseEntity'

export interface IDiscipline extends IBaseEntity {
    courses: number
    typeDiscipline:number
    name: string
    workload: number
}
