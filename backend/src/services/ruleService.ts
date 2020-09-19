import { IRule } from '../domain/interfaces/IRule'
import { RuleRepository } from '../repositories/ruleRepository'
import { AbstractService } from './AbstractService'

export class RulesService extends AbstractService<IRule, RuleRepository> {
  constructor () {
    super(RuleRepository)
  }
}
