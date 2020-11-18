import { disciplineTypesTable } from '../database/common/disciplineTypesTable'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { AbstractRepository } from './AbstractRepository'

export class TypeDisciplineRepository extends AbstractRepository<ITypeDiscipline> {
  constructor () {
    super(disciplineTypesTable)
  }

  getName = async (): Promise<ITypeDiscipline[]> => this.session
    .select('name')
}
