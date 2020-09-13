import { IStudent } from '../interfaces/IStudent'
import { Override } from '../../@types/override'
import { IRegistryDto } from './IRegistryDto'
import { ICourseDto } from './ICourseDto'
import { IClassDto } from './IClassDto'
import { IUserDto } from './IUserDto'

export type IStudentDto = Override<IStudent, {
  user: IUserDto
  ra: IRegistryDto
  course: ICourseDto
  class: IClassDto
}>
