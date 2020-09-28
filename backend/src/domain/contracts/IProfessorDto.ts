import { Override } from '../../@types/override'
import { IProfessor } from '../interfaces/entities/IProfessor'
import { IUserDto } from './IUserDto'

export type IProfessorDto = Override<IProfessor, {
    user: IUserDto
}>