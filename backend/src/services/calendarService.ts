
import { ICalendar } from '../domain/interfaces/entities/ICalendar'
import { calendarRepository } from '../repositories/calendarRepository'

const getCalendarById = async (id: number): Promise<ICalendar> => await calendarRepository.getCalendarById(id)

const getCalendar = async (): Promise<ICalendar[]> => await calendarRepository.getCalendar()

const createCalendar = async (calendar: Omit<ICalendar, 'id'>): Promise<ICalendar> => await calendarRepository.insertCalendar(calendar)

export const calendarService = {
  getCalendar,
  getCalendarById,
  createCalendar
}
