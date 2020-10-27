import { disciplinesTable } from '../database/common/disciplinesTable'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { AbstractRepository } from './AbstractRepository'

export class DisciplineRepository extends AbstractRepository<IDiscipline> {
  constructor () {
    super(disciplinesTable)
  }

  getDisciplineName = async (): Promise<IDiscipline[]> => await this.session
    .select('name')
}
