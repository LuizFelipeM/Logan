import { classesTableName } from '../database/common/classesTable'
import { coursesTableName } from '../database/common/coursesTable'
import { disciplinesTableName } from '../database/common/disciplinesTable'
import { noteFoulsTableName } from '../database/common/noteFoulsTable'
import { semestersTableName } from '../database/common/semestersTable'
import { subjectsTable } from '../database/common/subjectsTable'
import { knex } from '../database/knex/dbConnection'
import { ISubjectDetailedDto } from '../domain/interfaces/contracts/ISubjectDetailedDto'
import { ISubject } from '../domain/interfaces/entities/ISubject'
import { AbstractRepository } from './AbstractRepository'

export class SubjectRepository extends AbstractRepository<ISubject> {
  constructor () {
    super(subjectsTable)
  }

  selectAllSubjectsDetailed = async (): Promise<ISubjectDetailedDto[]> => await this.session
    .select<ISubjectDetailedDto[]>(
      'c.id AS class_id',
      'd.name AS discipline_name',
      'se.semester_course AS course_semester',
      knex().raw('round(d.workload - avg(nf.fouls) * t1.class_time / 60) AS fouls'),
      knex().raw('trunc(avg(nf.final_note), 2) AS avg_final_note'),
      'd.workload'
    )
    .innerJoin(`${classesTableName} as c`, 'c.id', 't1.class')
    .innerJoin(`${coursesTableName} as co`, 'co.id', 'c.course')
    .innerJoin(`${semestersTableName} as se`, 'se.id', 't1.semester')
    .innerJoin(`${noteFoulsTableName} as nf`, 'nf.discipline', 't1.discipline')
    .innerJoin(`${disciplinesTableName} as d`, 'd.id', 'nf.discipline')
    .groupBy('d.workload', 'd.name', 'c.id', 't1.class_time', 'se.semester_course', 'nf.fouls')
}
