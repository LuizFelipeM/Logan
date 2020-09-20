import { IRule } from '../domain/interfaces/IRule'
import { rulesTable } from '../database/common/rulesTable'
import { AbstractRepository } from './AbstractRepository'
import { injectable } from 'inversify'

@injectable()
export class RuleRepository extends AbstractRepository<IRule> {
  protected readonly table = rulesTable
}
