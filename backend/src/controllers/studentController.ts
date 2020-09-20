import { inject, injectable } from 'inversify'
import { IStudent } from '../domain/interfaces/IStudent'
import { StudentService } from '../services/studentService'
import { AbstractController } from './AbstractController'

@injectable()
export class StudentController extends AbstractController<IStudent, StudentService> {
  constructor (
    @inject(StudentService)
    protected readonly service: StudentService
  ) { super() }
}
