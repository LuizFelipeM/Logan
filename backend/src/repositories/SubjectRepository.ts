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
      knex().raw('trunc((avg(d.workload) - avg(nf.fouls) * avg(t1.class_time) / 60) / avg(d.workload), 2) * 100 AS frequency'),
      knex().raw('trunc(avg(nf.final_note), 2) AS final_note_avg')
    )
    .innerJoin({ c: classesTableName }, 'c.id', 't1.class')
    .innerJoin({ co: coursesTableName }, 'co.id', 'c.course')
    .innerJoin({ se: semestersTableName }, 'se.id', 't1.semester')
    .innerJoin({ nf: noteFoulsTableName }, 'nf.discipline', 't1.discipline')
    .innerJoin({ d: disciplinesTableName }, 'd.id', 'nf.discipline')
    .groupBy('d.workload', 'd.name', 'c.id', 't1.class_time', 'se.semester_course', 'nf.fouls')

  selectSubjectsDetailed = async (disciplineId: number): Promise<ISubjectDetailedDto[]> => await this.session
    .select<ISubjectDetailedDto[]>(
      'c.id AS class_id',
      'd.name AS discipline_name',
      'se.semester_course AS course_semester',
      knex().raw('trunc((avg(d.workload) - avg(nf.fouls) * avg(t1.class_time) / 60) / avg(d.workload), 2) * 100 AS frequency'),
      knex().raw('trunc(avg(nf.final_note), 2) AS final_note_avg')
    )
    .innerJoin({ c: classesTableName }, 'c.id', 't1.class')
    .innerJoin({ co: coursesTableName }, 'co.id', 'c.course')
    .innerJoin({ se: semestersTableName }, 'se.id', 't1.semester')
    .innerJoin({ nf: noteFoulsTableName }, 'nf.discipline', 't1.discipline')
    .innerJoin({ d: disciplinesTableName }, 'd.id', 'nf.discipline')
    .groupBy('d.workload', 'd.name', 'c.id', 't1.class_time', 'se.semester_course', 'nf.fouls')
    .where('d.id', disciplineId)
}
