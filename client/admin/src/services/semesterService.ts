import { ISemester } from '../interfaces/models/ISemester'
import BaseService from './BaseService'

class SemesterService extends BaseService<ISemester> {
  constructor() {
    super('semester')
  }
}

const semesterService = new SemesterService()

export default semesterService
