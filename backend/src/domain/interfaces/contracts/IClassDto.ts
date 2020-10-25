import { Override } from '../../../@types/override'
import { IClass } from '../entities/IClass'
import { ICourseDto } from './ICourseDto'

export type IClassDto = Override<IClass, {
  course: ICourseDto
}>
