import { inject } from 'inversify'
import { IProfessorDetailedDto } from '../domain/interfaces/contracts/IProfessorDetailedDto'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { ProfessorRepository } from '../repositories/ProfessorRepository'
import { AbstractService } from './AbstractService'

export class ProfessorService extends AbstractService <IProfessor, ProfessorRepository> {
  constructor (
    @inject(ProfessorRepository)
    protected readonly professorRepository: ProfessorRepository
  ) { super(professorRepository) }

  getAllDetailed = (): Promise<IProfessorDetailedDto[]> => this.professorRepository.selectAllDetailed()
}
