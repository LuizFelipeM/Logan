import { IRule } from '../domain/interfaces/IRule'
import { ruleRepository } from '../repositories/ruleRepository'

const createRule = async (rule: Omit<IRule, 'id'>): Promise<IRule> => await ruleRepository.insertRule(rule)

export const ruleService = { createRule }
