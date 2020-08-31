import { IRule } from '../../../domain/interfaces/rule/IRule'

import { v4 as uuid } from 'uuid'
import { insertRule } from '../repositorie/insertRule'

function createRule (_: void, args: Omit<IRule, 'id'>): IRule {
  const id = uuid()
  const rule = { ...args, id }

  insertRule(rule)

  return rule
}

export { createRule }
