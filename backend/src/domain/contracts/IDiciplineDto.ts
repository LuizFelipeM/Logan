import { Override } from '../../@types/override'
import { Idiscipline } from '../interfaces/Idiscipline'
import { ICourseDto } from './ICourseDto'
import { ITypedisciplineDto } from './ITypedisciplineDto'

export type IdisciplineDto = Override<Idiscipline, {
    course: ICourseDto
    discipline: IdisciplineDto
    typediscipline: ITypedisciplineDto
}>
