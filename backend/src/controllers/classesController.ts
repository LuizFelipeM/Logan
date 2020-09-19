import { IClass } from '../domain/interfaces/IClass'
import { ClassesService } from '../services/classesService'
import { AbstractController } from './AbstractController'

class ClassesController extends AbstractController<IClass, ClassesService> {
  constructor () {
    super(ClassesService)
  }
}

export const classeController = new ClassesController()
