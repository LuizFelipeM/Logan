import { StudentsRepository } from '../repositories/studentRepository'
import { IStudent } from '../domain/interfaces/IStudent'
import { AbstractService } from './AbstractService'

export class StudentService extends AbstractService<IStudent, StudentsRepository> {
  constructor () {
    super(StudentsRepository)
  }

  getByUserId = async (id: number): Promise<IStudent> => await this.repository.selectByUserId(id)
}
