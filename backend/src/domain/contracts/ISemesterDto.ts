import { Override } from '../../@types/override'
import { ISemester } from '../interfaces/ISemester'
import { IdisciplineDto } from './IdisciplineDto'
import { IcalendarDto } from './IcalendarDto'

export type ISemesterDto = Override<ISemester, {
    calendar: IcalendarDto
    currentSemester: IdisciplineDto
    discipline: IdisciplineDto
}>
