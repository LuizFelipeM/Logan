import { Override } from '../../@types/override'
import { INoteFouls } from '../interfaces/INoteFouls'
import { IStudentDto } from './IStudentDto'
import { ISemesterDto } from './ISemesterDto'
import { IDisciplineDto } from './IDiciplineDto'

export type INoteFoulsDto = Override<INoteFouls, {
    discipline: IDisciplineDto
    students: IStudentDto
    semester: ISemesterDto
}>
