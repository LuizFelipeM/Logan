import { coursesTable } from '../database/common/coursesTable'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { AbstractRepository } from './AbstractRepository'

export class CoursesRepository extends AbstractRepository<ICourse> {
  constructor () {
    super(coursesTable)
  }
}
