import { IStudent } from '../domain/interfaces/IStudent'
import { StudentService } from '../services/studentService'
import { AbstractController } from './AbstractController'

class StudentController extends AbstractController<IStudent, StudentService> {
  constructor () {
    super(StudentService)
  }
}

export const studentController = new StudentController()
