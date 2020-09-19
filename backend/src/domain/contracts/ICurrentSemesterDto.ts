import { Override } from '../../@types/override'
import { ICurrentSemester } from '../interfaces/ICurrentSemester'
import { IcalendarDto } from './ICalenderDto'
import { IDisciplineDto } from './IDiciplineDto'

export type ICurrentSemesterDto = Override<ICurrentSemester, {
    currentSemester: ICurrentSemesterDto
    calendar: IcalendarDto
    discipline: IDisciplineDto
}>
