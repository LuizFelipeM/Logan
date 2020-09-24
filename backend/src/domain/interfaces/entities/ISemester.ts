import { IBaseEntity } from './IBaseEntity'

export interface ISemester extends IBaseEntity {
    currentSemester: number
    calendar: number
    discipline: number
    evalP1Start: number,
    evalP1end: number,
    evalP2Start: number,
    evalP2end: number,
    evalSubStart: number,
    evalSubEnd: number,
    evalExamStart: number,
    evalExamEnd: number
}
