import { Override } from '../../../@types/override'
import { ICourse } from '../entities/ICourse'
import { ICampusDto } from './ICampusDto'

export type ICourseDto = Override<ICourse, {
  campus: ICampusDto
}>
