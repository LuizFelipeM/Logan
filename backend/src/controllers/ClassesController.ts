import { inject } from 'inversify'
import { controller, httpGet, queryParam } from 'inversify-express-utils'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClassesService } from '../services/ClassesService'
import { AbstractController } from './AbstractController'

@controller('/class')
export class ClassController extends AbstractController<IClass, ClassesService> {
  constructor (
    @inject(ClassesService)
    protected readonly classesService: ClassesService
  ) { super(classesService) }

  @httpGet('/getAllClassesMinified')
  private getAllClassMinifiedView () {
    return this.classesService.getAllClassesMinifiedView()
  }

  @httpGet('/detailedView')
  private getDetailedView (@queryParam('id') id: number) {
    return this.classesService.getDetailedViewById(id)
  }
}
