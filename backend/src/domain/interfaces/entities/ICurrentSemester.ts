import { IBaseEntity } from './IBaseEntity'

export interface ICurrentSemester extends IBaseEntity {
    calendar: number
    discipline: number
    eval_p1_start: string
    eval_p1_end: string
    eval_p2_start: string
    eval_p2_end: string
    eval_sub_start: string
    eval_sub_end: string
    eval_exam_start: string
    eval_exam_end: string
}
