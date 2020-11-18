import { IStudentDetailedDto } from '../interfaces/contracts/IStudentDetailedDto'
import { IStudent } from '../interfaces/models/IStudent'
import BaseService from './BaseService'

enum EndpointEnum {
  getAllDetailed = '/getAllDetailed'
}

class StudentService extends BaseService<IStudent> {
  constructor() {
    super('student')
  }

  getAllDetailed = (): Promise<IStudentDetailedDto[]> => this.GET(EndpointEnum.getAllDetailed)
}

const studentService = new StudentService()

export default studentService
