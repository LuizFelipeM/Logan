import { Override } from '../../@types/override'
import { INoteFouls } from '../interfaces/INoteFouls'
import { IStudentDto } from './IStudentDto'
import { IDiciplineDto } from './IDiciplineDto'
import { ISemesterDto } from './ISemesterDto'

export type INoteFoulsDto = Override<INoteFouls, {
    dicipline: IDiciplineDto
    students: IStudentDto
    semester: ISemesterDto
}>
