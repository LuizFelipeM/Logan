import { inject } from 'inversify'
import { IRule } from '../domain/interfaces/entities/IRule'
import { RuleRepository } from '../repositories/RuleRepository'
import { AbstractService } from './AbstractService'

export class RuleService extends AbstractService<IRule, RuleRepository> {
  constructor (
    @inject(RuleRepository)
    protected readonly repository: RuleRepository
  ) {
    super()
  }
}
