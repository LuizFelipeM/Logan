import { Override } from '../../../@types/override'
import { ISemester } from '../interfaces/ISemester'
import { IcalendarDto } from './ICalenderDto'
import { IDisciplineDto } from './IDiciplineDto'

export type ISemesterDto = Override<ISemester, {
    calendar: IcalendarDto
    currentSemester: IDisciplineDto
    discipline: IDisciplineDto
}>
