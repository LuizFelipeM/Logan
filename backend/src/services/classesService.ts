import { inject } from 'inversify'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClasseRepository } from '../repositories/classesRepository'
import { AbstractService } from './AbstractService'

export class ClassesService extends AbstractService<IClass, ClasseRepository> {
  constructor (
    @inject(ClasseRepository)
    protected readonly repository: ClasseRepository
  ) {
    super()
  }
}
