import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { CourseService } from '../services/CoursesService'
import { AbstractController } from './AbstractController'

@controller('/course')
export class CourseController extends AbstractController<ICourse, CourseService> {
  constructor (
    @inject(CourseService)
    protected readonly courseService: CourseService
  ) { super(courseService) }

  @httpGet('/getAllCoursesView')
  private getAllCoursesMinifiedView () {
    return this.courseService.getAllCoursesMinifiedView()
  }
}
