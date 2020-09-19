import { INoteFouls } from '../domain/interfaces/INoteFouls'
import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { AbstractRepository } from './AbstractRepository'
import { knex } from '../database/knex/dbConnection'

export class NoteFoulsRepository extends AbstractRepository<INoteFouls> {
  constructor () {
    super(noteFoulsTable)
  }

  selectByStudentId = async (students: number): Promise<INoteFouls> => await knex(noteFoulsTable)
    .select('*')
    .where({ students })
    .first()
}
// const getNoteFoulByStudentId = async (students: number): Promise<INoteFouls> => await knex(noteFoulsTable)
//   .select('*')
//   .where({ students })
//   .first()

// const getNoteFouls = async (): Promise<INoteFouls[]> => await knex(noteFoulsTable)
//   .select('*')

// const insertNoteFouls = async (data: Omit<INoteFouls, 'id'>): Promise<INoteFouls> => await knex(noteFoulsTable)
//   .insert(data)
//   .returning<INoteFouls>('*')

// export const noteFoulsRepository = { getNoteFouls, insertNoteFouls }

export const noteFoulsRepository = new NoteFoulsRepository()
