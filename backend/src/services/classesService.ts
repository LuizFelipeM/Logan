import { inject } from 'inversify'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClasseRepository } from '../repositories/ClassesRepository'
import { AbstractService } from './AbstractService'

export class ClassesService extends AbstractService<IClass, ClasseRepository> {
  constructor (
    @inject(ClasseRepository)
    protected readonly repository: ClasseRepository
  ) {
    super()
  }
}
