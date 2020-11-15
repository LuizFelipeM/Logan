import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { SemesterService } from '../services/SemesterService'
import { AbstractController } from './AbstractController'

@controller('/semester')
export class currentsemesterController extends AbstractController<ISemester, SemesterService> {
  constructor (
    @inject(SemesterService)
    protected readonly currentsemesterService: SemesterService
  ) { super(currentsemesterService) }

  @httpGet('/getIntervalOfExams')
  private getIntervalOfExams () {
    return this.currentsemesterService.intervalExam()
  }
}
