import { IRule } from '../domain/interfaces/IRule'
import { rulesTable } from './common/rulesTable'

const getRuleById = async (id: number): Promise<IRule> => await rulesTable.select('*').where({ id }).first()

const getRules = async (limit = 15): Promise<IRule[]> => await rulesTable.select('*').limit(limit)

const insertRule = async (data: Omit<IRule, 'id'>): Promise<IRule> => await rulesTable.insert(data).returning('*').first()

export const ruleRepository = { getRuleById, getRules, insertRule }
