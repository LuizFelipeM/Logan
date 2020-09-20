import { StudentsRepository } from '../repositories/studentRepository'
import { IStudent } from '../domain/interfaces/IStudent'
import { AbstractService } from './AbstractService'
import { inject, injectable } from 'inversify'

@injectable()
export class StudentService extends AbstractService<IStudent, StudentsRepository> {
  constructor (
    @inject(StudentsRepository)
    protected readonly repository: StudentsRepository
  ) {
    super()
  }

  getByUserId = async (id: number): Promise<IStudent> => await this.repository.selectByUserId(id)
}
