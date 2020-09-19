import { IBaseEntity } from './IBaseEntity'

export interface ICalendar extends IBaseEntity {
    startNotesP1: string
    finalNotesP1: string
    startNotesP2: string
    finalNotesP2: string
    startNotesSub: string
    startNotesExam: string
    finalNotesExam: string
    finalNotesSub: string
}
