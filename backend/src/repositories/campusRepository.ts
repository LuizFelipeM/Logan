import { campusTable } from '../database/common/campusTable'
import { knex } from '../database/knex/dbConnection'
import { ICampus } from '../domain/interfaces/ICampus'

const getCampusById = async (id: number): Promise<ICampus> => await knex(campusTable)
  .select('*')
  .where({ id })
  .first()

const getCampus = async (): Promise<ICampus[]> => await knex(campusTable)
  .select('*')

const insertCampus = async (data: Omit<ICampus, 'id'>): Promise<ICampus> => await knex(campusTable)
  .insert(data)
  .returning<ICampus>('*')

export const campusRepository = {
  getCampus,
  getCampusById,
  insertCampus
}
