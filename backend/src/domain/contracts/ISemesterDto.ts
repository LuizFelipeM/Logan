import { Override } from '../../@types/override'
import { ISemester } from '../interfaces/ISemester'
import { IDiciplineDto } from './IDiciplineDto'
import { ICalenderDto } from './ICalenderDto'

export type ISemesterDto = Override<ISemester, {
    calender: ICalenderDto
    currentSemester: IDiciplineDto
    dicipline: IDiciplineDto
}>
