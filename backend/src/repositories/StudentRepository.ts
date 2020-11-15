import { studentsTable } from '../database/common/studentsTable'
import { AbstractRepository } from './AbstractRepository'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { IStudentCountByClassDto } from '../domain/interfaces/contracts/IStudentCountByClassDto'
import { IClassStudentsAndSemesterDto } from '../domain/interfaces/contracts/IClassesStudentsAndSemesterDto'
import { classesTableName } from '../database/common/classesTable'
import { semestersTableName } from '../database/common/semestersTable'
import { knex } from '../database/knex/dbConnection'

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

  selectClassesStudentsAndSemester = async ():Promise<IClassStudentsAndSemesterDto[]> => await this.session
    .innerJoin({ c: classesTableName }, 't1.course', 'c.course')
    .innerJoin({ s: semestersTableName }, 'c.course', 's.course')
    .select(
      knex().raw('count(s.id) as student'),
      's.id as semester',
      'c.id as class'
    )
    .groupBy('s.id', 'c.id')
}
