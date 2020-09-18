import { Override } from '../../@types/override'
import { ICurrentSemester } from '../interfaces/ICurrentSemester'
import { IcalendarDto } from './IcalendarDto'
import { IdisciplineDto } from './IdisciplineDto'

export type ICurrentSemesterDto = Override<ICurrentSemester, {
    currentSemester: ICurrentSemesterDto
    calendar: IcalendarDto
    discipline: IdisciplineDto
}>
