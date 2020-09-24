import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { DiciplineService } from '../services/DisciplineService'
import { AbstractController } from './AbstractController'

@controller('/dicipline')
export class DiciplineController extends AbstractController<IDiscipline, DiciplineService> {
  constructor (
    @inject(DiciplineService)
    protected readonly service: DiciplineService
  ) { super() }
}
