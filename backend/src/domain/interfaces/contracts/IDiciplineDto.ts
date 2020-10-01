import { Override } from '../../../@types/override'
import { IDiscipline } from '../entities/IDiscipline'
import { ICourseDto } from './ICourseDto'
import { ITypeDisciplineDto } from './ITypeDiciplineDto'

export type IDisciplineDto = Override<IDiscipline, {
    course: ICourseDto
    typediscipline: ITypeDisciplineDto
}>
