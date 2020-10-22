import { inject } from 'inversify'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { TypeDisciplineRepository } from '../repositories/typeDisciplineRepository'
import { AbstractService } from './AbstractService'

export class TypeDisciplineService extends AbstractService<ITypeDiscipline, TypeDisciplineRepository> {
  constructor (
    @inject(TypeDisciplineRepository)
    protected readonly repository: TypeDisciplineRepository
  ) { super() }
}
