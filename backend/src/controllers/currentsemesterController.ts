import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ICurrentSemester } from '../domain/interfaces/entities/ICurrentSemester'
import { CurrentsemesterService } from '../services/currentsemesterService'
import { AbstractController } from './AbstractController'

@controller('/currentsemester')
export class currentsemesterController extends AbstractController<ICurrentSemester, CurrentsemesterService> {
  constructor (
        @inject(CurrentsemesterService)
        protected readonly service: CurrentsemesterService
  ) {
    super()
  }
}
