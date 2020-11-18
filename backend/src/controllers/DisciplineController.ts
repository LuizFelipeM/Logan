import { inject } from 'inversify'
import { controller, httpGet, queryParam } from 'inversify-express-utils'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { DisciplineService } from '../services/DisciplineService'
import { AbstractController } from './AbstractController'

@controller('/discipline')
export class DisciplineController extends AbstractController<IDiscipline, DisciplineService> {
  constructor (
    @inject(DisciplineService)
    protected readonly disciplineService: DisciplineService
  ) { super(disciplineService) }

  @httpGet('/typeWorkload')
  private getTypeWorkload () {
    return this.disciplineService.getDisciplineWithTypeandWorkload()
  }

  @httpGet('/detailedView')
  private getDetailedView (@queryParam('id') id: number) {
    return this.disciplineService.getDetailedViewByDisciplineId(id)
  }
}
