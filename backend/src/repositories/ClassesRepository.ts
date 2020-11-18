import { classesTable } from '../database/common/classesTable'
import { coursesTableName } from '../database/common/coursesTable'
import { disciplinesTableName } from '../database/common/disciplinesTable'
import { noteFoulsTableName } from '../database/common/noteFoulsTable'
import { studentsTableName } from '../database/common/studentsTable'
import { usersTableName } from '../database/common/usersTable'
import { knex } from '../database/knex/dbConnection'
import { IClassDetailedViewDto } from '../domain/interfaces/contracts/IClassDetailedViewDto'
import { IClassMinifyViewDto } from '../domain/interfaces/contracts/IClassMinifyViewDto'
import { IClass } from '../domain/interfaces/entities/IClass'
import { AbstractRepository } from './AbstractRepository'

export class ClassesRepository extends AbstractRepository<IClass> {
  constructor () {
    super(classesTable)
  }

  selectAllClassesMinifiedView = async (): Promise<IClassMinifyViewDto[]> => await this.session
    .select<IClassMinifyViewDto[]>({
      class_id: 't1.id',
      course_name: 'co.name'
    })
    .count({ students_count: 's.id' })
    .innerJoin({ co: coursesTableName }, 'co.id', 't1.course')
    .innerJoin({ s: studentsTableName }, 's.class', 't1.id')
    .groupBy('t1.id', 'co.name')

  selectDetailedViewById = async (id: number): Promise<IClassDetailedViewDto[]> => {
    const res = await this.session
      .where<IClassDetailedViewDto[]>('t1.id', id)
      .select(
        't1.id as class_id',
        knex().raw('concat(u.first_name,\' \', u.last_name) as full_name'),
        's.ra',
        'co.name as course_name',
        'd.name as discipline_name',
        'nf.fouls',
        'nf.note_p1',
        'nf.note_p2',
        'nf.note_sub',
        'nf.note_exam',
        'nf.final_note'
      )
      .innerJoin({ s: studentsTableName }, 's.class', 't1.id')
      .innerJoin({ co: coursesTableName }, 'co.id', 't1.course')
      .innerJoin({ u: usersTableName }, 'u.id', 's.id')
      .innerJoin({ nf: noteFoulsTableName }, 'nf.students', 's.id')
      .innerJoin({ d: disciplinesTableName }, 'd.id', 'nf.discipline')
      .orderBy('d.name')

    return res
  }
}
