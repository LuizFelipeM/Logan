import { inject } from 'inversify'
import { controller, httpGet, httpPost, requestBody } from 'inversify-express-utils'
import { INewCampusAndUfDto } from '../domain/interfaces/contracts/INewCampusAndUfDto'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { CampusService } from '../services/CampusService'
import { AbstractController } from './AbstractController'

@controller('/campus')
export class CampusController extends AbstractController<ICampus, CampusService> {
  constructor (
    @inject(CampusService)
    protected readonly campusService: CampusService
  ) { super(campusService) }

  @httpGet('/getCourseNameTotalSemesterAndCampusName')
  private getCourseNameSemesterAndCampus () {
    return this.campusService.getCourseNameSemesterAndCampusName()
  }

  @httpPost('/createCampusNameAndUf')
  private createCampusNameAndUf (@requestBody() newCampus: INewCampusAndUfDto) {
    return this.campusService.createCampusNameAndUf(newCampus)
  }
}
