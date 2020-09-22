
import { studentsTable } from '../database/common/studentsTable'
import { knex } from '../database/knex/dbConnection'
import { AbstractRepository } from './AbstractRepository'
import { IStudent } from '../domain/interfaces/entities/IStudent'

export class StudentsRepository extends AbstractRepository<IStudent> {
  protected readonly table = studentsTable

  selectByUserId = async (user: number): Promise<IStudent> => await knex(this.table)
    .select('*')
    .where({ user })
    .first()
}
