import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClassesService } from '../services/classesService'
import { AbstractController } from './AbstractController'

@controller('/class')
export class ClassController extends AbstractController<IClass, ClassesService> {
  constructor (
    @inject(ClassesService)
    protected readonly service: ClassesService
  ) { super() }

  @httpGet('/filterClass')
  private async filterClass () {
    const data = await this.service.getClassWithCourse()
    return data
  }
}
