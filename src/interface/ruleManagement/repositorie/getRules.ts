import { IRule } from '../../../domain/interfaces/rule/IRule'
import { rulesTable } from './rulesTable'

export const getRules = async (limit?: number): Promise<IRule[]> => await rulesTable.select('*').limit(limit ?? 15)
