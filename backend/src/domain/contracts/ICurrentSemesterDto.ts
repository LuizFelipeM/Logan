import { Override } from '../../@types/override'
import { ICurrentSemester } from '../interfaces/ICurrentSemester'
import { ICalenderDto } from './ICalenderDto'
import { IdisciplineDto } from './IdisciplineDto'

export type ICurrentSemesterDto = Override<ICurrentSemester, {
    currentSemester: ICurrentSemesterDto
    calender: ICalenderDto
    discipline: IdisciplineDto
}>
