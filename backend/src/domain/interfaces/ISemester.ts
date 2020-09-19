import { IBaseEntity } from './IBaseEntity'

export interface ISemester extends IBaseEntity {
    currentSemester: number
    calendar: number
    discipline: number
    evalP1Start: Date
    evalP1end: Date
    evalP2Start: Date
    evalP2end: Date
    evalSubStart: Date
    evalSubEnd: Date
    evalExamStart: Date
    evalExamEnd: Date
}
