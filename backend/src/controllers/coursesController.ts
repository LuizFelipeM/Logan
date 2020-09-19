import { ICourse } from '../domain/interfaces/ICourse'
import { courseService, CourseService } from '../services/coursesService'
import { AbstractController } from './AbstractController'

class CoursesController extends AbstractController<ICourse, CourseService> {
  constructor () {
    super(CourseService)
  }
}

export const courseController = new CoursesController()
