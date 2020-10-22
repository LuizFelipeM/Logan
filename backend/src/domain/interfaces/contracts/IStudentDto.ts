import { Override } from '../../../@types/override'
import { IRegistryDto } from './IRegistryDto'
import { ICourseDto } from './ICourseDto'
import { IClassDto } from './IClassDto'
import { IUserDto } from './IUserDto'
import { IStudent } from '../entities/IStudent'

export type IStudentDto = Override<IStudent, {
  user: IUserDto
  ra: IRegistryDto
  course: ICourseDto
  class: IClassDto
}>
