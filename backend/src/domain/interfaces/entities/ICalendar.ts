import { IBaseEntity } from './IBaseEntity'

export interface ICalendar extends IBaseEntity {
    start_notes_p1: string
    final_notes_p1: string
    start_notes_p2: string
    final_notes_p2: string
    start_notes_sub: string
    start_notes_exam: string
    final_notes_exam: string
    final_notes_sub: string
}
