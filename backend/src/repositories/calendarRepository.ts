import { calendarTable } from '../database/common/calendarTable'
import { knex } from '../database/knex/dbConnection'
import { ICalendar } from '../domain/interfaces/entities/ICalendar'

const getCalendar = async (): Promise<ICalendar[]> => await knex(calendarTable)
  .select('*')

const getCalendarById = async (id: number): Promise<ICalendar> => await knex(calendarTable)
  .select('*')
  .where({ id })
  .first()

const insertCalendar = async (data: Omit<ICalendar, 'id'>): Promise<ICalendar> => await knex(calendarTable)
  .insert(data)
  .returning<ICalendar>('*')

export const calendarRepository = {
  getCalendar,
  getCalendarById,
  insertCalendar
}
