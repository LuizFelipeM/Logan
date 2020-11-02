import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { NoteFoulsService } from '../services/NoteFoulsService'
import { AbstractController } from './AbstractController'

@controller('/noteFouls')
export class NoteFoulsController extends AbstractController<INoteFouls, NoteFoulsService> {
  constructor (
    @inject(NoteFoulsService)
    protected readonly noteFoulsService: NoteFoulsService
  ) { super(noteFoulsService) }

  @httpGet('/getAvaregeNotesByCourses')
  private getAvaregeNotesByCourses () {
    return this.noteFoulsService.AvaregeWithCourse()
  }

  @httpGet('/getFrequencyCourses')
  private getFrequencyCourses () {
    return this.noteFoulsService.FrequencyOfCourse()
  }
}
