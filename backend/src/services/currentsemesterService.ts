import { inject } from 'inversify'
import { ISemester } from '../domain/interfaces/entities/ICurrentSemester'
import { SemesterRepository } from '../repositories/CurrentsemesterRepository'
import { AbstractService } from './AbstractService'

export class CurrentsemesterService extends AbstractService<ISemester, SemesterRepository> {
  constructor (
    @inject(SemesterRepository)
    protected readonly currentSemesterRepository: SemesterRepository
  ) { super(currentSemesterRepository) }
}
