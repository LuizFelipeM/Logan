import { typeDisciplineTable } from '../database/common/typeDisciplineTable'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { AbstractRepository } from './AbstractRepository'

export class TypeDisciplineRepository extends AbstractRepository<ITypeDiscipline> {
  constructor () {
    super(typeDisciplineTable)
  }

  getName = async (): Promise<ITypeDiscipline[]> => this.session
    .select('name')
}
