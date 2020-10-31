import { classesTable } from '../database/common/classesTable'
import { coursesTableName } from '../database/common/coursesTable'
import { studentsTableName } from '../database/common/studentsTable'
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
}
