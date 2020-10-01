import { IBaseEntity } from './IBaseEntity'

export interface ISemester extends IBaseEntity {
    currentSemester: number
<<<<<<< HEAD
    calendar: string
    discipline: string
    evalP1Start: string,
    evalP1end: string,
    evalP2Start: string,
    evalP2end: string,
    evalSubStart: string,
    evalSubEnd: string,
    evalExamStart: string,
=======
    calendar: number
    discipline: number
    evalP1Start: string
    evalP1end: string
    evalP2Start: string
    evalP2end: string
    evalSubStart: string
    evalSubEnd: string
    evalExamStart: string
>>>>>>> develop
    evalExamEnd: string
}
