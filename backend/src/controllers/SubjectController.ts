import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { ISubject } from '../domain/interfaces/entities/ISubject'
import { SubjectService } from '../services/SubjectService'
import { AbstractController } from './AbstractController'

@controller('/subject')
export class SubjectController extends AbstractController<ISubject, SubjectService> {
  constructor (
    @inject(SubjectService)
    protected readonly subjectService: SubjectService
  ) { super(subjectService) }

  @httpGet('/getAllDetailedView')
  private getAllDetailedView () {
    return this.subjectService.getAllSubjectDetailedInfo()
  }
}
