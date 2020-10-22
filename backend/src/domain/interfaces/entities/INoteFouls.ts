import { IBaseEntity } from './IBaseEntity'

export interface INoteFouls extends IBaseEntity {
    students: number
    discipline: number
    semester: number
    note_p1: number
    note_p2: number
    note_sub: number
    note_exam: number
    final_note: number
    fouls: number
}
