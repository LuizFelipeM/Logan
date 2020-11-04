import { ISubjectDetailedDto } from '../interfaces/contracts/ISubjectDetailedDto'
import { ISubject } from '../interfaces/models/ISubject'
import BaseService from './BaseService'

enum EndpointEnum {
  detailedView = '/getDetailedView'
}

class SubjectService extends BaseService<ISubject> {
  constructor() {
    super('subject')
  }

  getAllSubjectDetailed = (): Promise<ISubjectDetailedDto[]> => this.GET(EndpointEnum.detailedView)

  getSubjectDetailed = (disciplineId: number): Promise<ISubjectDetailedDto[]> => this.GET(EndpointEnum.detailedView, { params: { disciplineId } })
}

const subjectService = new SubjectService()

export default subjectService
