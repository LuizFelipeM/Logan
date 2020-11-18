import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { StudentService } from '../services/StudentService'
import { AbstractController } from './AbstractController'

@controller('/student')
export class StudentController extends AbstractController<IStudent, StudentService> {
  constructor (
    @inject(StudentService)
    protected readonly studentService: StudentService
  ) { super(studentService) }

  @httpGet('/getAllDetailed')
  private getAllDetailed () {
    return this.studentService.getStudentDetailed()
  }

  @httpGet('/getClassesStudentsAndSemester')
  private getClassesStudentsAndSemester () {
    return this.studentService.academicYear()
  }
}
