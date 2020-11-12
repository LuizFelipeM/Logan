import { IBase } from './IBase'

export interface ISemester extends IBase {
    course: number
    calendar: number
    semesterCourse: number
    semesterYear: number
    year: string
    p1Start: string
    p1End: string
    p2Start: string
    p2End: string
    subStart: string
    subEnd: string
    examStart: string
    examEnd: string
}
