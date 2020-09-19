import { ICourse } from '../domain/interfaces/ICourse'
import { CoursesRepository } from '../repositories/coursesRepository'
import { AbstractService } from './AbstractService'

export class CourseService extends AbstractService<ICourse, CoursesRepository> {
  constructor () {
    super(CoursesRepository)
  }
}
export const courseService = new CourseService()
