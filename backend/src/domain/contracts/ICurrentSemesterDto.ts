import { Override } from '../../@types/override'
import { ICurrentSemester } from '../interfaces/ICurrentSemester'
import { ICalenderDto } from './ICalenderDto'
import { IDiciplineDto } from './IDiciplineDto'

export type ICurrentSemesterDto = Override<ICurrentSemester, {
    currentSemester: ICurrentSemesterDto
    calender: ICalenderDto
    dicipline: IDiciplineDto
}>
