import { IRule } from '../domain/interfaces/IRule'
import { rulesTable } from '../database/common/rulesTable'
import { knex } from '../database/knex/dbConnection'

const getRuleById = async (id: number): Promise<IRule> => await knex(rulesTable).select('*').where({ id }).first()

const getRules = async (limit = 15): Promise<IRule[]> => await knex(rulesTable).select('*').limit(limit)

const insertRule = async (data: Omit<IRule, 'id'>): Promise<IRule> => await knex(rulesTable).insert(data).returning('*').first()

export const ruleRepository = { getRuleById, getRules, insertRule }
