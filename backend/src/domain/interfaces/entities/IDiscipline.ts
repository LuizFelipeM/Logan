import { IBaseEntity } from './IBaseEntity'

export interface IDiscipline extends IBaseEntity {
    course: number
    typeDiscipline:number
    name: string
    workload: number
}
