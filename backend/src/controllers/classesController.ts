import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClassesService } from '../services/classesService'
import { AbstractController } from './AbstractController'

@controller('/class')
export class ClassController extends AbstractController<IClass, ClassesService> {
  constructor (
    @inject(ClassesService)
    protected readonly service: ClassesService
  ) { super() }
}
