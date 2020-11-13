import { inject } from 'inversify'
import { controller, httpGet, httpPost } from 'inversify-express-utils'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { CampusService } from '../services/CampusService'
import { AbstractController } from './AbstractController'

@controller('/campus')
export class CampusController extends AbstractController<ICampus, CampusService> {
  constructor (
    @inject(CampusService)
    protected readonly campusService: CampusService
  ) { super(campusService) }

  @httpGet('/getCampusNameAndUf')
  private getCampusNameAndUF () {
    return this.campusService.getNameAndUfCampus()
  }

  @httpGet('/getCourseNameTotalSemesterAndCampusName')
  private getCourseNameSemesterAndCampus () {
    return this.campusService.getCourseNameSemesterAndCampusName()
  }

  @httpPost('/insertCampus')
  private insertCampusNameAndUf () {
    return this.campusService.insertCampusNameAndUf()
  }
}
