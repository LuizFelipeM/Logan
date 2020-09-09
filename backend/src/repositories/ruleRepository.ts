import { IRule } from '../domain/interfaces/IRule'
import { rulesTable } from '../database/common/rulesTable'
import { AbstractRepository } from './AbstractRepository'

class RuleRpo extends AbstractRepository<IRule> {
  constructor () {
    super(rulesTable)
  }
}

export const ruleRepository = new RuleRpo()
