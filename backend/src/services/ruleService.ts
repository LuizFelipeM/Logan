import { IRule } from '../domain/interfaces/IRule'
import { ruleRepository, RuleRpository } from '../repositories/ruleRepository'
import { AbstractService } from './AbstractService'

class RulesService extends AbstractService<IRule, RuleRpository> {
  constructor () {
    super(ruleRepository)
  }
}

export const ruleService = new RulesService()
