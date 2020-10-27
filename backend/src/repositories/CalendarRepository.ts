import { calendarTable } from '../database/common/calendarTable'
import { ICalendar } from '../domain/interfaces/entities/ICalendar'
import { AbstractRepository } from './AbstractRepository'

export class CalendarRepository extends AbstractRepository<ICalendar> {
  constructor () {
    super(calendarTable)
  }
}
