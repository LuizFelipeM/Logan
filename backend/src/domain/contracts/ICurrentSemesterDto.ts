import { Override } from '../../@types/override'
import { ICalender } from '../interfaces/ICalender'
import { ICurrentSemester } from '../interfaces/ICurrentSemester'
import { IDicipline } from '../interfaces/IDicipline'

export type ICurrentSemesterDto = Override<ICurrentSemester, {
    currentSemester: ICurrentSemester
    calender: ICalender
    dicipline: IDicipline
}>
