import { ICoursesMinifyViewDto } from '../interfaces/contracts/ICoursesMinifyViewDto'
import { ICourse } from '../interfaces/models/ICourse'
import BaseService from './BaseService'

enum EndpointEnum {
  getAllCoursesMinifiedView = '/getAllCoursesMinifiedView'
}

class CourseService extends BaseService<ICourse> {
  constructor() {
    super('course')
  }

  getAllCoursesMinifiedView = (): Promise<ICoursesMinifyViewDto[]> => this.GET(EndpointEnum.getAllCoursesMinifiedView)
}

const courseService = new CourseService()

export default courseService
