import { IBaseEntity } from './IBaseEntity'

export interface IDiscipline extends IBaseEntity {
    id:number
    courses: number
    typeDiscipline:number
    name: string
    workload: number
}
