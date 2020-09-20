import { IStudent } from '../domain/interfaces/IStudent'
import { studentsTable } from '../database/common/studentsTable'
import { knex } from '../database/knex/dbConnection'
import { AbstractRepository } from './AbstractRepository'
import { injectable } from 'inversify'

@injectable()
export class StudentsRepository extends AbstractRepository<IStudent> {
  protected readonly table = studentsTable

  selectByUserId = async (user: number): Promise<IStudent> => await knex(this.table)
    .select('*')
    .where({ user })
    .first()
}
