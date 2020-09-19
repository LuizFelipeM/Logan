import { IRule } from '../domain/interfaces/IRule'
import { rulesTable } from '../database/common/rulesTable'
import { AbstractRepository } from './AbstractRepository'

export class RuleRepository extends AbstractRepository<IRule> {
  constructor () {
    super(rulesTable)
  }
}
