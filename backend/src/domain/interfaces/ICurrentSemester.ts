import { IBaseEntity } from './IBaseEntity'

export interface ICurrentSemester extends IBaseEntity {
    calendar: number
    discipline: number
    evalP1Start: string
    evalP1End: string
    evalP2Start: string
    evalP2End: string
    evalSubStart: string
    evalSubEnd: string
    evalExamStart: string
    evalExamEnd: string
}
