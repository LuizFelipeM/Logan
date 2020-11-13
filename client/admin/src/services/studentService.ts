import { IStudent } from '../interfaces/models/IStudent'
import BaseService from './BaseService'

class StudentService extends BaseService<IStudent> {
  constructor() {
    super('student')
  }
}

const studentService = new StudentService()

export default studentService
