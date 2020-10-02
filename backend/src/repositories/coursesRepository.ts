import { campusTableName } from '../database/common/campusTable'
import { coursesTable } from '../database/common/coursesTable'
import { knex } from '../database/knex/dbConnection'
import { ICourseDto } from '../domain/interfaces/contracts/ICourseDto'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { AbstractRepository } from './AbstractRepository'

export class CoursesRepository extends AbstractRepository<ICourse> {
   protected readonly table = coursesTable

   selectAllCourseDto = async (): Promise<ICourseDto[]> => await knex(this.table)
     .innerJoin(`${campusTableName} as c3`, 'c3.id', 't1.campus')
     .select(
       't1.id',
       't1.name',
       't1.totalSemester',
       knex.raw('to_json (c3.*) as campus')
     )
}
