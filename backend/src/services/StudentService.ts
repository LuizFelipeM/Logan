import { StudentsRepository } from '../repositories/StudentRepository'
import { AbstractService } from './AbstractService'
import { inject } from 'inversify'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { IStudentDetailedDto } from '../domain/interfaces/contracts/IStudentDetailedDto'

export class StudentService extends AbstractService<IStudent, StudentsRepository> {
  constructor (
    @inject(StudentsRepository)
    protected readonly studentsRepository: StudentsRepository
  ) { super(studentsRepository) }

  getStudentDetailed = (): Promise<IStudentDetailedDto[]> => this.studentsRepository.selectStudentDetailed()
}
