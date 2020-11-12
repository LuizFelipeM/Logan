import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ISemester } from '../domain/interfaces/entities/ISemester'
import { SemesterService } from '../services/SemesterService'
import { AbstractController } from './AbstractController'

@controller('/currentsemester')
export class currentsemesterController extends AbstractController<ISemester, SemesterService> {
  constructor (
    @inject(SemesterService)
    protected readonly currentsemesterService: SemesterService
  ) { super(currentsemesterService) }
}
