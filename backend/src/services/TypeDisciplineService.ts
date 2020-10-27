import { inject } from 'inversify'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { TypeDisciplineRepository } from '../repositories/TypeDisciplineRepository'
import { AbstractService } from './AbstractService'

export class TypeDisciplineService extends AbstractService<ITypeDiscipline, TypeDisciplineRepository> {
  constructor (
    @inject(TypeDisciplineRepository)
    protected readonly typeDisciplineRepository: TypeDisciplineRepository
  ) { super(typeDisciplineRepository) }
}
