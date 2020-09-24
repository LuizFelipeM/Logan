import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ICalendar } from '../domain/interfaces/entities/ICalendar'
import { CalendarService } from '../services/CalendarService'
import { AbstractController } from './AbstractController'

@controller('/calendar')
export class CalendarController extends AbstractController<ICalendar, CalendarService> {
  constructor (
        @inject(CalendarService)
        protected readonly service: CalendarService
  ) { super() }
}
