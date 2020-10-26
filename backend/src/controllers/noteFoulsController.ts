import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { NoteFoulsService } from '../services/NoteFoulsService'
import { AbstractController } from './AbstractController'

@controller('/noteFouls')
export class NoteFoulsController extends AbstractController<INoteFouls, NoteFoulsService> {
  constructor (
    @inject(NoteFoulsService)
    protected readonly service: NoteFoulsService
  ) { super() }

  @httpGet('/graphicAvarageNotes')
  private async graphicAvarageNotes () {
    return await this.service.AvaregeWithCourse()
  }

 @httpGet('/frequencyNoteFouls')
  private async frequencyNoteFouls () {
    return await this.service.FrequencyOfCourse()
  }
}
