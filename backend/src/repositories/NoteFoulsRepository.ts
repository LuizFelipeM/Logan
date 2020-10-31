import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { AbstractRepository } from './AbstractRepository'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { IAvaregeCouseDto } from '../domain/contracts/IAvaregeCourseDto'
import { coursesTableName } from '../database/common/coursesTable'
import { IFrequencyDto } from '../domain/contracts/IFrequencyDto'
import { studentsTableName } from '../database/common/studentsTable'
import { disciplinesTableName } from '../database/common/disciplinesTable'
import { knex } from '../database/knex/dbConnection'
import { subjectsTableName } from '../database/common/subjectsTable'

export class NoteFoulsRepository extends AbstractRepository<INoteFouls> {
  constructor () {
    super(noteFoulsTable)
  }

  selectFinalNoteWithCourse = async (): Promise<IAvaregeCouseDto[]> => await this.session
    .innerJoin(`${disciplinesTableName} as d`, 't1.discipline', 'd.id')
    .innerJoin(`${coursesTableName} as c`, 'c.id', 'd.course')
    .select(
      't1.discipline',
      'd.course',
      'c.name'
    )
    .avg('final_note as avaregeNotes')
    .groupBy('t1.discipline', 'd.course', 'c.name')

  selectFrequencyOfNoteSandFouls = async (): Promise<IFrequencyDto[]> => await this.session
    .innerJoin(`${studentsTableName} as s`, 't1.students', 's.id')
    .innerJoin(`${disciplinesTableName} as d`, 't1.discipline', 'd.id')
    .innerJoin(`${coursesTableName} as c`, 'c.id', 'd.course')
    .innerJoin(`${subjectsTableName} as sb`, 'd.id', 'sb.discipline')
    .select(
      knex().raw('trunc((((d.workload -(avg(fouls) * avg(sb.class_time)/ 60))*100)/d.workload)) as frequency'),
      'c.name as course_name'
    )
    .groupBy('t1.discipline', 'd.course', 'c.name', 'd.workload', 'sb.class_time')
}
