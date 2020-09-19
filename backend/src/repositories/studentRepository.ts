import { IStudent } from '../domain/interfaces/IStudent'
import { studentsTable } from '../database/common/studentsTable'
import { knex } from '../database/knex/dbConnection'
import { AbstractRepository } from './AbstractRepository'

export class StudentsRepository extends AbstractRepository<IStudent> {
  constructor () {
    super(studentsTable)
  }

  getByUserId = async (user: number): Promise<IStudent> => await knex(studentsTable)
    .select('*')
    .where({ user })
    .first()
}

export const studentRepository = new StudentsRepository()
