import { IRule } from '../domain/interfaces/IRule'
import { ruleRepository } from '../repositories/ruleRepository'

const getRules = async (): Promise<IRule[]> => await ruleRepository.getAll()
const getRuleById = async (id: number): Promise<IRule> => await ruleRepository.getById(id)
const createRule = async (rule: Omit<IRule, 'id'>): Promise<IRule> => await ruleRepository.insert(rule)

export const ruleService = {
  getRules,
  getRuleById,
  createRule
}
