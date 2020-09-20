import { inject, injectable } from 'inversify'
import { IRule } from '../domain/interfaces/IRule'
import { RuleRepository } from '../repositories/ruleRepository'
import { AbstractService } from './AbstractService'

@injectable()
export class RulesService extends AbstractService<IRule, RuleRepository> {
  constructor (
    @inject(RuleRepository)
    protected readonly repository: RuleRepository
  ) {
    super()
  }
}
