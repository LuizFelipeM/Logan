import { IClassStudentsAndSemesterDto } from '../interfaces/contracts/IClassStudentsAndSemesterDto'
import { IStudent } from '../interfaces/models/IStudent'
import BaseService from './BaseService'

enum EndpointEnum{
    classStudentsAndSemester = '/getClassesStudentsAndSemester'
}

class StudentsService extends BaseService<IStudent> {
  constructor() {
    super('student')
  }

  getClassStudentsAndSemester = (): Promise<IClassStudentsAndSemesterDto[]> => this.GET(EndpointEnum.classStudentsAndSemester)
}

const studentsService = new StudentsService()

export default studentsService
