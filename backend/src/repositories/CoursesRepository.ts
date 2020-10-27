import { coursesTable } from '../database/common/coursesTable'
import { disciplinesTableName } from '../database/common/disciplinesTable'
import { noteFoulsTableName } from '../database/common/noteFoulsTable'
import { subjectsTableName } from '../database/common/subjectsTable'
import { knex } from '../database/knex/dbConnection'
import { ICoursesMinifyView } from '../domain/interfaces/contracts/ICoursesMinifyViewDto'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { AbstractRepository } from './AbstractRepository'

export class CoursesRepository extends AbstractRepository<ICourse> {
  constructor () {
    super(coursesTable)
  }

  selectAllCoursesMinifiedView = async (): Promise<ICoursesMinifyView[]> => await this.session
    .select<ICoursesMinifyView[]>(
      't1.name AS course_name',
      knex().raw('trunc(avg(nf.final_note), 2) AS notes_avg'),
      knex().raw('round(avg(d.workload) - avg(nf.fouls) * avg(s.class_time) / 60) AS fouls_avg')
    )
    .innerJoin({ d: disciplinesTableName }, 't1.id', 'd.course')
    .innerJoin({ nf: noteFoulsTableName }, 'd.id', 'nf.discipline')
    .innerJoin({ s: subjectsTableName }, 'd.id', 's.discipline')
    .groupBy('t1.name')
}
