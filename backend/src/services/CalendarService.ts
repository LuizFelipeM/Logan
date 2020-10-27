import { inject } from 'inversify'
import { ICalendar } from '../domain/interfaces/entities/ICalendar'
import { CalendarRepository } from '../repositories/CalendarRepository'
import { AbstractService } from './AbstractService'

export class CalendarService extends AbstractService<ICalendar, CalendarRepository> {
  constructor (
    @inject(CalendarRepository)
    protected readonly calendarRepository: CalendarRepository
  ) { super(calendarRepository) }
}
