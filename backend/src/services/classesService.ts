import { IClass } from '../domain/interfaces/IClass'
import { ClasseRepository } from '../repositories/classesRepository'
import { AbstractService } from './AbstractService'

export class ClassesService extends AbstractService<IClass, ClasseRepository> {
  constructor () {
    super(ClasseRepository)
  }
}

export const ClasseService = new ClassesService()
