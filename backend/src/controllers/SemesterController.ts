import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { CurrentsemesterService } from '../services/SemesterService'
import { AbstractController } from './AbstractController'

@controller('/currentsemester')
export class currentsemesterController extends AbstractController<ISemester, CurrentsemesterService> {
  constructor (
    @inject(CurrentsemesterService)
    protected readonly currentsemesterService: CurrentsemesterService
  ) { super(currentsemesterService) }
}
