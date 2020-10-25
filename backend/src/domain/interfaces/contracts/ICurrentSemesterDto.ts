import { Override } from '../../../@types/override'
import { ICurrentSemester } from '../entities/ICurrentSemester'
import { IcalendarDto } from './ICalenderDto'
import { IDisciplineDto } from './IDiciplineDto'

export type ICurrentSemesterDto = Override<ICurrentSemester, {
    currentSemester: ICurrentSemesterDto
    calendar: IcalendarDto
    discipline: IDisciplineDto
}>
