import { Override } from '../../@types/override'
import { ICourse } from '../interfaces/entities/ICourse'
import { ICampusDto } from './ICampusDto'

export type ICourseDto = Override<ICourse, {
  campus: ICampusDto
}>
