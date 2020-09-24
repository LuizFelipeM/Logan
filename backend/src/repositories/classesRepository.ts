import { knex } from '../database/knex/dbConnection'
import { classesTableName } from '../database/common/classesTable'
import { IClass } from '../domain/interfaces/entities/IClass'

const getClassById = async (id: number): Promise<IClass> => await knex(classesTableName)
  .select('*')
  .where({ id })
  .first()

const getClass = async (): Promise<IClass[]> => await knex(classesTableName)
  .select('*')

const insertClass = async (data: Omit<IClass, 'id'>): Promise<IClass> => await knex(classesTableName)
  .insert(data)
  .returning<IClass>('*')

export const classesRepository = { getClassById, getClass, insertClass }
