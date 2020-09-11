import { Override } from '../../@types/override'
import { IDicipline } from '../interfaces/IDicipline'
import { ICourseDto } from './ICourseDto'
import { ITypeDiciplineDto } from './ITypeDiciplineDto'

export type IDiciplineDto = Override<IDicipline, {
    course: ICourseDto
    dicipline: IDiciplineDto
    typeDicipline: ITypeDiciplineDto
}>
