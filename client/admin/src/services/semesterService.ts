import { ISemester } from '../interfaces/models/ISemester'
import BaseService from './BaseService'
import { IIntervalOfExamsDto } from '../interfaces/contracts/IIntervalOfExamsDto'

enum EndpointEnum{
    intervalOfExams = '/getIntervalOfExams'
}

class SemesterService extends BaseService<ISemester> {
  constructor() {
    super('semester')
  }

  getIntervalOfExams = (): Promise<IIntervalOfExamsDto[]> => this.GET(EndpointEnum.intervalOfExams)
}

const semesterService = new SemesterService()

export default semesterService
