import { IRule } from '../../../domain/interfaces/rule/IRule'
import { rulesTable } from './rulesTable'

export const insertRule = async (data: IRule): Promise<void> => { await rulesTable.insert(data) }
