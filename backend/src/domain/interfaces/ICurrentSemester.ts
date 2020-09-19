import { IBaseEntity } from './IBaseEntity'

export interface ICurrentSemester extends IBaseEntity {
    calendar: Date
    discipline: Date
    evalP1Start: Date
    evalP1End: Date
    evalP2Start: Date
    evalP2End: Date
    evalSubStart: Date
    evalSubEnd: Date
    evalExamStart: Date
    evalExamEnd: Date
}
