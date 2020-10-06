
import { studentsTable } from '../database/common/studentsTable'
import { knex } from '../database/knex/dbConnection'
import { AbstractRepository } from './AbstractRepository'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { IStudentCountByClassDto } from '../domain/contracts/IStudentCountByClassDto'

export class StudentsRepository extends AbstractRepository<IStudent> {
  protected readonly table = studentsTable

  selectByUserId = async (user: number): Promise<IStudent> => await knex(this.table)
    .select('*')
    .where({ user })
    .first()

CountStudentsInClass = async (): Promise<IStudentCountByClassDto[]> => await knex(this.table)
  .select('class')
  .count('class')
  .groupBy('class')
}
