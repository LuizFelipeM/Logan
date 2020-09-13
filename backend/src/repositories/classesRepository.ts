import { IClass } from '../domain/interfaces/IClass'
import { knex } from '../database/knex/dbConnection'
import { classesTableName } from '../database/common/classesTable'

const getClassById = async (id: number): Promise<IClass> => await knex(classesTableName)
  .select('*')
  .where({ id })
  .first()

const getClass = async (): Promise<IClass[]> => await knex(classesTableName)
  .select('*')

const insertClass = async (data: Omit<IClass, 'id'>): Promise<IClass> => await knex(classesTableName)
  .insert(data)
  .returning('*')
  .first()

export const ClassesRepository = { getClassById, getClass, insertClass }
