import { disciplineTable } from '../database/common/disciplineTable'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { AbstractRepository } from './AbstractRepository'

export class DisciplineRepository extends AbstractRepository<IDiscipline> {
  protected readonly table = disciplineTable
}
