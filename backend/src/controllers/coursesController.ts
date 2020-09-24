import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { CourseService } from '../services/coursesService'
import { AbstractController } from './AbstractController'

@controller('/course')
export class CourseController extends AbstractController<ICourse, CourseService> {
  constructor (
    @inject(CourseService)
    protected readonly service: CourseService
  ) {
    super()
  }
}
