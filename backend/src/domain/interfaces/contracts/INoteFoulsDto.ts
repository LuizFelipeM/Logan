import { Override } from '../../../@types/override'
import { IStudentDto } from './IStudentDto'
import { ISemesterDto } from './ISemesterDto'
import { IDisciplineDto } from './IDiciplineDto'
import { INoteFouls } from '../entities/INoteFouls'

export type INoteFoulsDto = Override<INoteFouls, {
    discipline: IDisciplineDto
    students: IStudentDto
    semester: ISemesterDto
}>
