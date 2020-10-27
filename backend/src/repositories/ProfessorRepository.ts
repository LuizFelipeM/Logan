import { professorsTable } from '../database/common/professorsTable'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { AbstractRepository } from './AbstractRepository'

export class ProfessorRepository extends AbstractRepository<IProfessor> {
  constructor () {
    super(professorsTable)
  }
}
