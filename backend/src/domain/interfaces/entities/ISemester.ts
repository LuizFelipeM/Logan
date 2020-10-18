import { IBaseEntity } from './IBaseEntity'

export interface ISemester extends IBaseEntity {
    current_semester: number
    calendar: number
    discipline: number
    eval_p1_start: string
    eval_p1end: string
    eval_p2_start: string
    eval_p2end: string
    eval_sub_start: string
    eval_sub_end: string
    eval_exam_start: string
    eval_exam_end: string
}
