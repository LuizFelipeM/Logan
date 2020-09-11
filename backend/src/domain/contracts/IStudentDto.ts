import { IUser } from '../interfaces/IUser'
import { IStudent } from '../interfaces/IStudent'
import { Override } from '../../@types/override'
import { IRegistryDto } from './IRegistryDto'
import { ICourseDto } from './ICourseDto'
import { IClassDto } from './IClassDto'

export type IStudentDto = Override<IStudent, {
  user: IUser
  ra: IRegistryDto
  course: ICourseDto
  class: IClassDto
}>
