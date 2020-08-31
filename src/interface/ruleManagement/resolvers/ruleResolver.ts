import { IResolvers } from 'apollo-server-express'
import { rule, rules } from './ruleQueries'
import { createRule } from './ruleMutations'

export const ruleResolver: IResolvers = {
  Query: { rule, rules },
  Mutation: { createRule }
}
