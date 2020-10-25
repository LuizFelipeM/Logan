import { disciplineTable } from '../database/common/disciplineTable'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { AbstractRepository } from './AbstractRepository'

export class DisciplineRepository extends AbstractRepository<IDiscipline> {
  constructor () {
    super(disciplineTable)
  }

  getDisciplineName = async (): Promise<IDiscipline[]> => await this.session
    .select('name')
}
