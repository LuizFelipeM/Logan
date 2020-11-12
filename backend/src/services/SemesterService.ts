import { inject } from 'inversify'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { SemesterRepository } from '../repositories/SemesterRepository'
import { AbstractService } from './AbstractService'

export class SemesterService extends AbstractService<ISemester, SemesterRepository> {
  constructor (
    @inject(SemesterRepository)
    protected readonly currentSemesterRepository: SemesterRepository
  ) { super(currentSemesterRepository) }
}
