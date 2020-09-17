import { Override } from '../../@types/override'
import { ISemester } from '../interfaces/ISemester'
import { IdisciplineDto } from './IdisciplineDto'
import { ICalenderDto } from './ICalenderDto'

export type ISemesterDto = Override<ISemester, {
    calender: ICalenderDto
    currentSemester: IdisciplineDto
    discipline: IdisciplineDto
}>
