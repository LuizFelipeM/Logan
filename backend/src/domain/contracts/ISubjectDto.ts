import { Override } from '../../@types/override'
import { ISubject } from '../interfaces/entities/ISubject'
import { IClassDto } from './IClassDto'
import { IDisciplineDto } from './IDiciplineDto'
import { IProfessorDto } from './IProfessorDto'

export type ISubjectDto = Override<ISubject, {
    professor:IProfessorDto
    discipline:IDisciplineDto
    class: IClassDto
}>
