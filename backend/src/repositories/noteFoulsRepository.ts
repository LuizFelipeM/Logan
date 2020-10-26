import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { AbstractRepository } from './AbstractRepository'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { IAvaregeCouseDto } from '../domain/contracts/IAvaregeCourseDto'
import { knex } from '../database/knex/dbConnection'
import { disciplineTableName } from '../database/common/disciplineTable'
import { coursesTableName } from '../database/common/coursesTable'
import { IFrequencyDto } from '../domain/contracts/IFrequencyDto'
import { studentsTableName } from '../database/common/studentsTable'

export class NoteFoulsRepository extends AbstractRepository<INoteFouls> {
  protected readonly table = noteFoulsTable

  getFinalNoteWithCourse = async (): Promise<IAvaregeCouseDto[]> => await knex(noteFoulsTable)
    .innerJoin(`${disciplineTableName} as d`, 't1.discipline', 'd.id')
    .innerJoin(`${coursesTableName} as c`, 'c.id', 'd.courses')
    .select(
      't1.discipline',
      'd.courses',
      'c.name'
    )
    .avg('finalNote as avaregeNotes')
    .groupBy('t1.discipline', 'd.courses', 'c.name')

  getFrequencyOfNoteSandFouls = async (): Promise<IFrequencyDto[]> => await knex(noteFoulsTable)
    .innerJoin(`${studentsTableName}as s`, 't1.students', 's.id')
    .innerJoin(`${disciplineTableName} as d`, 't1.discipline', 'd.id')
    .innerJoin(`${coursesTableName} as c`, 'c.id', 'd.courses')
    // Knex.raw
    .groupBy('t1.discipline', 'd.courses', 'c.name')
}
