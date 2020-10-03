import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { DisciplineService } from '../services/DisciplineService'
import { AbstractController } from './AbstractController'

@controller('/discipline')
export class DisciplineController extends AbstractController<IDiscipline, DisciplineService> {
  constructor (
    @inject(DisciplineService)
    protected readonly service: DisciplineService
  ) { super() }

  // @httpGet('/typeWorkload')
  // private async getTypeWorkload () {
  //   return await this.service.getAllDisciplineWithTypeAndWorkload()
  // }
  @httpGet('/typeWorkload')
  private async getTypeWorkload () {
    return await this.service.getDisciplineWithTypeandWorkload()
  }
}
