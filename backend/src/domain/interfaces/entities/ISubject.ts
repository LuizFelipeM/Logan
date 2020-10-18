import { IBaseEntity } from './IBaseEntity'

export interface ISubject extends IBaseEntity{
    professor: number
    discipline: number
    class: number
}
