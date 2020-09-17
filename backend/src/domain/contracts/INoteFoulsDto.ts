import { Override } from '../../@types/override'
import { INoteFouls } from '../interfaces/INoteFouls'
import { IStudentDto } from './IStudentDto'
import { IdisciplineDto } from './IdisciplineDto'
import { ISemesterDto } from './ISemesterDto'

export type INoteFoulsDto = Override<INoteFouls, {
    discipline: IdisciplineDto
    students: IStudentDto
    semester: ISemesterDto
}>
