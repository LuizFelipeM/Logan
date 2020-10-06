import { Override } from '../../@types/override'
import { IClass } from '../interfaces/entities/IClass'
import { ICourseDto } from './ICourseDto'
import { IStudentDto } from './IStudentDto'

export type IClassDto = Override<IClass, {
  course: ICourseDto | undefined
  student: IStudentDto | undefined
}>
