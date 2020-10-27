import { inject } from 'inversify'
import { ICurrentSemester } from '../domain/interfaces/entities/ICurrentSemester'
import { CurrentsemesterRepository } from '../repositories/CurrentsemesterRepository'
import { AbstractService } from './AbstractService'

export class CurrentsemesterService extends AbstractService<ICurrentSemester, CurrentsemesterRepository> {
  constructor (
    @inject(CurrentsemesterRepository)
    protected readonly currentSemesterRepository: CurrentsemesterRepository
  ) { super(currentSemesterRepository) }
}
