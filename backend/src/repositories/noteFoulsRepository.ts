import { INoteFouls } from '../domain/interfaces/INoteFouls'
import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { knex } from '../database/knex/dbConnection'

const getNoteFoulById = async (id: number): Promise<INoteFouls> => await knex(noteFoulsTable)
  .select('*')
  .where({ id })
  .first()

const getNoteFouls = async (): Promise<INoteFouls[]> => await knex(noteFoulsTable)
  .select('*')

const insertNoteFouls = async (data: Omit<INoteFouls, 'id'>): Promise<INoteFouls> => await knex(noteFoulsTable)
  .insert(data)
  .returning('*')
  .first()

export const noteFoulsRepository = { getNoteFoulById, getNoteFouls, insertNoteFouls }
