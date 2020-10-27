import { inject } from 'inversify'
import { AbstractService } from './AbstractService'
import { ISubject } from '../domain/interfaces/entities/ISubject'
import { SubjectRepository } from '../repositories/SubjectRepository'
import { ISubjectDetailedDto } from '../domain/interfaces/contracts/ISubjectDetailedDto'

export class SubjectService extends AbstractService<ISubject, SubjectRepository> {
  constructor (
    @inject(SubjectRepository)
    protected readonly subjectRepository: SubjectRepository
  ) { super(subjectRepository) }

  getSubjectDetailedInfo = (): Promise<ISubjectDetailedDto[]> => this.subjectRepository.selectAllSubjectsDetailed()
}
