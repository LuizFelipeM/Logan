import { IStudent } from '../domain/interfaces/IStudent'
import { StudentService, studentService } from '../services/studentService'
import { AbstractController } from './AbstractController'

class StudentController extends AbstractController<IStudent, StudentService> {
  constructor () {
    super(studentService)
  }
}

export const studentController = new StudentController()
