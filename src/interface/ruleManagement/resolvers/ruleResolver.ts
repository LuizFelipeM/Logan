import { IResolvers } from 'apollo-server-express'
import { IRule } from '../../../domain/interfaces/rule/IRule'
import { rulesMock } from '../../../domain/interfaces/rule/rulesMock'

function rule (_: void, args: { id: string }): IRule | undefined {
  return rulesMock.find(rule => rule.id === args.id)
}

function rules (_: void, args: { limit: number }): Array<IRule> | undefined {
  return rulesMock.slice(0, args.limit ?? 10)
}

export const ruleResolver: IResolvers = { Query: { rule, rules } }
