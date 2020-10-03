import { Override } from '../../@types/override'
import { IClass } from '../interfaces/entities/IClass'
import { ICourseDto } from './ICourseDto'

export type IClassDto = Override<IClass, {
  course: ICourseDto
}>
