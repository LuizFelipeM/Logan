import { Override } from '../../@types/override'
import { IDiscipline } from '../interfaces/IDiscipline'
import { ICourseDto } from './ICourseDto'
import { ITypeDisciplineDto } from './ITypeDiciplineDto'

export type IDisciplineDto = Override<IDiscipline, {
    course: ICourseDto
    discipline: IDisciplineDto
    typediscipline: ITypeDisciplineDto
}>
