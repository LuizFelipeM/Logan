import { studentsTable } from '../database/common/studentsTable'
import { AbstractRepository } from './AbstractRepository'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { IStudentCountByClassDto } from '../domain/interfaces/contracts/IStudentCountByClassDto'
import { IStudentDetailedDto } from '../domain/interfaces/contracts/IStudentDetailedDto'
import { knex } from '../database/knex/dbConnection'
import { usersTableName } from '../database/common/usersTable'
import { coursesTableName } from '../database/common/coursesTable'
import { registriesStatusTableName } from '../database/common/registriesStatusTable'
import { registriesTableName } from '../database/common/registriesTable'

export class StudentsRepository extends AbstractRepository<IStudent> {
  constructor () {
    super(studentsTable)
  }

  selectByUserId = async (user: number): Promise<IStudent | undefined > => await this.session
    .select('*')
    .where({ user })
    .first()

  countStudentsInClass = async (): Promise<IStudentCountByClassDto[]> => await this.session
    .select('class')
    .count('class')
    .groupBy('class')

  selectStudentDetailed = async (): Promise<IStudentDetailedDto[]> => await this.session
    .select(
      't1.ra',
      't1.class',
      'c.name AS course_name',
      'rs.name AS registry_status',
      knex().raw('concat(u.first_name,\' \', u.last_name) as full_name')
    )
    .innerJoin({ u: usersTableName }, 'u.id', 't1.user')
    .innerJoin({ c: coursesTableName }, 'c.id', 't1.course')
    .innerJoin({ r: registriesTableName }, 'r.id', 't1.ra')
    .innerJoin({ rs: registriesStatusTableName }, 'rs.id', 'r.status')
    .orderBy('t1.ra', 'asc')
}
