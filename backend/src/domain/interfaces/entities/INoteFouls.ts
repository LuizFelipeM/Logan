import { IBaseEntity } from './IBaseEntity'

export interface INoteFouls extends IBaseEntity {
    students: number
    discipline: number
    semester: number
    noteP1: number
    noteP2: number
    noteSub: number
    noteExam: number
    finalNote: number
    fouls: number
}
