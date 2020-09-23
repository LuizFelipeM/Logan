import { inject } from 'inversify'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { CoursesRepository } from '../repositories/coursesRepository'
import { AbstractService } from './AbstractService'

export class CourseService extends AbstractService<ICourse, CoursesRepository> {
  constructor (
    @inject(CoursesRepository)
    protected readonly repository: CoursesRepository
  ) {
    super()
  }
}
