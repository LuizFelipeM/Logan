import { Override } from '../../@types/override'
import { IDicipline } from '../interfaces/IDicipline'
import { ICourse } from '../interfaces/ICourse'
import { ICourseDto } from './ICourseDto'

export type IDiciplineDto = Override<IDicipline, {
    course: ICourseDto
    dicipline: IDiciplineDto
    typeDicipline: ITypeDiciplineDto
}>
