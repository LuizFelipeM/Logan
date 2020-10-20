import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { ProfessorService } from '../services/ProfessorService'
import { AbstractController } from './AbstractController'

@controller('/professor')
export class ProfessorController extends AbstractController<IProfessor, ProfessorService> {
  constructor (
    @inject(ProfessorService)
    protected readonly professorService: ProfessorService
  ) { super(professorService) }
}
