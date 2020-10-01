import { Override } from '../../../@types/override'
import { IClass } from '../interfaces/IClass'
import { ICourseDto } from './ICourseDto'

export type IClassDto = Override<IClass, {
  course: ICourseDto
}>
