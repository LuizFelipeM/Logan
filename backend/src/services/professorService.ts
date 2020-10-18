import { inject } from 'inversify'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { ProfessorRepository } from '../repositories/ProfessorRepository'
import { AbstractService } from './AbstractService'

export class ProfessorService extends AbstractService <IProfessor, ProfessorRepository> {
  constructor (
        @inject(ProfessorRepository)
        protected readonly repository: ProfessorRepository
  ) {
    super()
  }
}
