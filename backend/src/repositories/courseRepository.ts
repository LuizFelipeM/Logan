import { coursesTable } from '../database/common/coursesTable'
import { knex } from '../database/knex/dbConnection'
import { ICourse } from '../domain/interfaces/entities/ICourse'

const getCourseById = async (id: number): Promise<ICourse> => await knex(coursesTable)
  .select('*')
  .where({ id })
  .first()

const getCourse = async (): Promise<ICourse[]> => await knex(coursesTable)
  .select('*')

const insertCourse = async (data: Omit<ICourse, 'id'>): Promise<ICourse> => await knex(coursesTable)
  .insert(data)
  .returning<ICourse>('*')

export const courseRepository = { getCourseById, getCourse, insertCourse }
