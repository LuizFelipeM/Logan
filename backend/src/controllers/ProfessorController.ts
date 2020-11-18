import { inject } from 'inversify'
import { controller, httpGet, queryParam } from 'inversify-express-utils'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { ProfessorService } from '../services/ProfessorService'
import { AbstractController } from './AbstractController'

@controller('/professor')
export class ProfessorController extends AbstractController<IProfessor, ProfessorService> {
  constructor (
    @inject(ProfessorService)
    protected readonly professorService: ProfessorService
  ) { super(professorService) }

  @httpGet('/getAllDetailed')
  private getAllDetailed () {
    return this.professorService.getAllDetailed()
  }

  @httpGet('/getProfessorToEdit')
  private getProfessorToEdit (@queryParam('id') id: number) {
    return this.professorService.getProfessorToEdit(id)
  }
}
