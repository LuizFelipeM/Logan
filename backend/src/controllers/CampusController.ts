import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { CampusService } from '../services/CampusService'
import { AbstractController } from './AbstractController'

@controller('/campus')
export class CampusController extends AbstractController<ICampus, CampusService> {
  constructor (
    @inject(CampusService)
    protected readonly campusService: CampusService
  ) { super(campusService) }
}
