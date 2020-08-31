import { IRule } from '../../../domain/interfaces/rule/IRule'
import { getRules } from '../repositorie/getRules'
import { getRuleById } from '../repositorie/getRule'

async function rule (parent: unknown, args: { id: string }, context: unknown): Promise<IRule | undefined> {
  console.log('parent', parent)
  console.log('args', args)
  console.log('context', context)

  return await getRuleById(args.id)
}

async function rules (parent: unknown, args: { limit: number }, context: unknown): Promise<Array<IRule> | undefined> {
  console.log('parent', parent)
  console.log('args', args)
  console.log('context', context)

  return await getRules(args.limit)
}

export { rule, rules }
