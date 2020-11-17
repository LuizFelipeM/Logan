import { ICouseNameSemesterAndCampusNameDto } from '../interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { INewCampusAndUfDto } from '../interfaces/contracts/INewCampusAndUfDto'
import { ICampus } from '../interfaces/models/ICampus'
import BaseService from './BaseService'

enum EndpointEnum{
  getCourseNameSemesterAndCampusName = '/getCourseNameTotalSemesterAndCampusName',
  createCampusNameAndUf ='/createCampusNameAndUf'
}

class CampusService extends BaseService<ICampus> {
  constructor() {
    super('campus')
  }

  getCourseNameSemesterAndCampusName = (): Promise<ICouseNameSemesterAndCampusNameDto[]> => this.GET(EndpointEnum.getCourseNameSemesterAndCampusName)

  createCampusNameAndUf = (newCampus:INewCampusAndUfDto): Promise<void> => this.POST(EndpointEnum.createCampusNameAndUf, newCampus)
}

const campusService = new CampusService()

export default campusService
