import { rulesTable } from '../database/common/rulesTable'
import { AbstractRepository } from './AbstractRepository'
import { IRule } from '../domain/interfaces/entities/IRule'

export class RuleRepository extends AbstractRepository<IRule> {
  protected readonly table = rulesTable
}
