import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { StudentService } from '../services/StudentService'
import { AbstractController } from './AbstractController'

@controller('/student')
export class StudentController extends AbstractController<IStudent, StudentService> {
  constructor (
    @inject(StudentService)
    protected readonly service: StudentService
  ) { super() }
}
