import { inject } from 'inversify'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { DiciplineRepository } from '../repositories/DisciplineRepository'
import { AbstractService } from './AbstractService'

export class DiciplineService extends AbstractService<IDiscipline, DiciplineRepository> {
  constructor (
  @inject(DiciplineRepository)
  protected readonly repository: DiciplineRepository
  ) { super() }
}
