import { IRule } from '../domain/interfaces/IRule'
import { ruleRepository, RuleRepository } from '../repositories/ruleRepository'
import { AbstractService } from './AbstractService'

export class RulesService extends AbstractService<IRule, RuleRepository> {
  constructor () {
    super(ruleRepository)
  }
}

export const ruleService = new RulesService()
