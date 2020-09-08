import { IStudent } from '../domain/interfaces/IStudent'
import { studentsTable } from '../database/common/studentsTable'
import { knex } from '../database/knex/dbConnection'

const getStudents = async (): Promise<IStudent[]> => await knex(studentsTable)
  .select('*')

const getStudentById = async (id: number): Promise<IStudent> => await knex(studentsTable)
  .select('*')
  .where({ id })
  .first()

const getStudentByUserId = async (user: number): Promise<IStudent> => await knex(studentsTable)
  .select('*')
  .where({ user })
  .first()

const insertStudent = async (student: Omit<IStudent, 'id'>): Promise<IStudent> => await knex(studentsTable)
  .insert(student)
  .returning<IStudent>('*')

export const studentRepository = {
  getStudents,
  getStudentById,
  getStudentByUserId,
  insertStudent
}
