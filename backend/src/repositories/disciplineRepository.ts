import { disciplineTable } from '../database/common/disciplineTable'
import { knex } from '../database/knex/dbConnection'
import { IDiscipline } from '../domain/interfaces/IDiscipline'

const getdisciplineById = async (id:number): Promise<IDiscipline> => await knex(disciplineTable)
  .select('*')
  .where({ id })
  .first()

const getdiscipline = async (): Promise<IDiscipline[]> => await knex(disciplineTable)
  .select('*')

const insertdiscipline = async (data: Omit<IDiscipline, 'id'>): Promise<IDiscipline> => await knex(disciplineTable)
  .insert(data)
  .returning<IDiscipline>('*')

export const disciplineRepository = {
  getdiscipline,
  getdisciplineById,
  insertdiscipline
}
