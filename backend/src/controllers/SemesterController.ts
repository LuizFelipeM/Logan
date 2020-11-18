import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { SemesterService } from '../services/SemesterService'
import { AbstractController } from './AbstractController'

@controller('/semester')
export class SemesterController extends AbstractController<ISemester, SemesterService> {
  constructor (
    @inject(SemesterService)
    protected readonly SsemesterService: SemesterService
  ) { super(SsemesterService) }

  @httpGet('/getIntervalOfExams')
  private getIntervalOfExams () {
    return this.SsemesterService.intervalExam()
  }
}
