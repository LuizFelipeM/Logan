import { studentRepository, StudentsRepository } from '../repositories/studentRepository'
import { IStudent } from '../domain/interfaces/IStudent'
import { AbstractService } from './AbstractService'

class StudentsService extends AbstractService<IStudent, StudentsRepository> {
  constructor () {
    super(studentRepository)
  }

  getByUserId = async (id: number): Promise<IStudent> => await studentRepository.getByUserId(id)
}

export const studentService = new StudentsService()
