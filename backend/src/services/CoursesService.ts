import { inject } from 'inversify'
import { ICoursesMinifyViewDto } from '../domain/interfaces/contracts/ICoursesMinifyViewDto'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { AbstractService } from './AbstractService'

export class CourseService extends AbstractService<ICourse, CoursesRepository> {
  constructor (
    @inject(CoursesRepository)
    protected readonly coursesRepository: CoursesRepository
  ) { super(coursesRepository) }

  getAllCoursesMinifiedView = (): Promise<ICoursesMinifyViewDto[]> => this.coursesRepository.selectAllCoursesMinifiedView()
}
