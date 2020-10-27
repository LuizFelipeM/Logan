import { Override } from '../../../@types/override'
import { IProfessor } from '../entities/IProfessor'
import { IUserDto } from './IUserDto'

export type IProfessorDto = Override<IProfessor, {
    user: IUserDto
}>
