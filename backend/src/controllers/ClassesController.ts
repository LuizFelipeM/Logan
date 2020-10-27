import { inject } from 'inversify'
import { controller, httpGet } from 'inversify-express-utils'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClassesService } from '../services/ClassesService'
import { AbstractController } from './AbstractController'

@controller('/class')
export class ClassController extends AbstractController<IClass, ClassesService> {
  constructor (
    @inject(ClassesService)
    protected readonly classesService: ClassesService
  ) { super(classesService) }
}
