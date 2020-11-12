import { classesTableName } from '../database/common/classesTable'
import { disciplinesTable } from '../database/common/disciplinesTable'
import { noteFoulsTableName } from '../database/common/noteFoulsTable'
import { semestersTableName } from '../database/common/semestersTable'
import { studentsTableName } from '../database/common/studentsTable'
import { subjectsTableName } from '../database/common/subjectsTable'
import { knex } from '../database/knex/dbConnection'
import { IDisciplineDetailedDto } from '../domain/interfaces/contracts/IDisciplineDetailedDto'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { AbstractRepository } from './AbstractRepository'

export class DisciplineRepository extends AbstractRepository<IDiscipline> {
  constructor () {
    super(disciplinesTable)
  }

  selectAllDisciplineName = async (): Promise<IDiscipline[]> => await this.session
    .select('name')

  selectDetailedViewById = async (id: number): Promise<IDisciplineDetailedDto[]> => this.session
    .select(
      'c.id AS class_id',
      'se.semester_course',
      't1.name AS discipline_name',
      knex().raw('trunc((avg(t1.workload) - avg(nf.fouls) * avg(s.class_time) / 60) / avg(t1.workload), 2) * 100 AS frequency'),
      knex().raw('trunc(avg(nf.final_note), 2) AS final_note_avg')
    )
    .count({ students_count: 'st.id' })
    .innerJoin({ s: subjectsTableName }, 's.discipline', 't1.id')
    .innerJoin({ c: classesTableName }, 's.class', 'c.id')
    .innerJoin({ st: studentsTableName }, 'st.class', 'c.id')
    .innerJoin({ se: semestersTableName }, 'se.id', 's.semester')
    .innerJoin({ nf: noteFoulsTableName }, 'nf.discipline', 't1.id')
    .groupBy('c.id', 'se.semester_course', 't1.name')
    .where<IDisciplineDetailedDto[]>('t1.id', id)
}
