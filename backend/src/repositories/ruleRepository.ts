import { IRule } from '../domain/interfaces/IRule'
import { rulesTable } from '../database/common/rulesTable'
import { AbstractRepository } from './AbstractRepository'

export class RuleRpository extends AbstractRepository<IRule> {
  constructor () {
    super(rulesTable)
  }
}

export const ruleRepository = new RuleRpository()
