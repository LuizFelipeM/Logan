import { IBaseEntity } from './IBaseEntity'

export interface ICalendar extends IBaseEntity {
    id: number
    startNotesP1: Date
    finalNotesP1: Date
    startNotesP2: Date
    finalNotesP2: Date
    startNotesSub: Date
    startNotesExam: Date
    finalNotesExam: Date
    finalNotesSub: Date
}
