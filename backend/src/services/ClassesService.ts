import { inject } from 'inversify'
import { IClassMinifyViewDto } from '../domain/interfaces/contracts/IClassMinifyViewDto'
import { IClass } from '../domain/interfaces/entities/IClass'
import { ClasseRepository } from '../repositories/ClassesRepository'
import { AbstractService } from './AbstractService'

export class ClassesService extends AbstractService<IClass, ClasseRepository> {
  constructor (
    @inject(ClasseRepository)
    protected readonly classeRepository: ClasseRepository
  ) { super(classeRepository) }

  getAllClassesMinifiedView = (): Promise<IClassMinifyViewDto[]> => this.classeRepository.selectAllClassesMinifiedView()
}
