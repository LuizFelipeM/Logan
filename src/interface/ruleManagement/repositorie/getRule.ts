import { IRule } from '../../../domain/interfaces/rule/IRule'
import { rulesTable } from './rulesTable'

export const getRuleById = async (id: string): Promise<IRule> => await rulesTable.select('*').where({ id }).first()
