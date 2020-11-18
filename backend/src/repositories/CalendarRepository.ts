import { calendarsTable } from '../database/common/calendarsTable'
import { ICalendar } from '../domain/interfaces/entities/ICalendar'
import { AbstractRepository } from './AbstractRepository'

export class CalendarRepository extends AbstractRepository<ICalendar> {
  constructor () {
    super(calendarsTable)
  }
}
