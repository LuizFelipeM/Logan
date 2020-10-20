import { inject } from 'inversify'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { CampusRepository } from '../repositories/CampusRepository'
import { AbstractService } from './AbstractService'

export class CampusService extends AbstractService<ICampus, CampusRepository> {
  constructor (
    @inject(CampusRepository)
    protected readonly campusRepository: CampusRepository
  ) { super(campusRepository) }
}
