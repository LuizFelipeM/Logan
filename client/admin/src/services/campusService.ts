import { ICouseNameSemesterAndCampusNameDto } from '../interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { ICampus } from '../interfaces/models/ICampus'
import { INewCampusAndUf } from '../pages/ControlPanel/CourseInstitution/PopUpCampus'
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

  createCampusNameAndUf = (newCampus:INewCampusAndUf): Promise<void> => this.POST(EndpointEnum.createCampusNameAndUf, newCampus)
}

const campusService = new CampusService()

export default campusService
