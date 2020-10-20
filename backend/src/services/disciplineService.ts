import { inject } from 'inversify'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { DisciplineRepository } from '../repositories/DisciplineRepository'
import { AbstractService } from './AbstractService'

export class DisciplineService extends AbstractService<IDiscipline, DisciplineRepository> {
  constructor (
  @inject(DisciplineRepository)
  protected readonly disciplineRepository: DisciplineRepository
  ) { super(disciplineRepository) }
}
