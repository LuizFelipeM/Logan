import { disciplineTable } from '../database/common/disciplineTable'
import { knex } from '../database/knex/dbConnection'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { AbstractRepository } from './AbstractRepository'

export class DisciplineRepository extends AbstractRepository<IDiscipline> {
  protected readonly table = disciplineTable

  getDisciplineName = () :Promise<IDiscipline[]> => knex(this.table)
    .select('name')
}
