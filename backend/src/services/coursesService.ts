import { ICourse } from '../domain/interfaces/ICourse'
import { CoursesRepository, coursesRepository } from '../repositories/coursesRepository'
import { AbstractService } from './AbstractService'

export class CourseService extends AbstractService<ICourse, CoursesRepository> {
  constructor () {
    super(coursessRepository)
  }
}
export const courseService = new CourseService()
