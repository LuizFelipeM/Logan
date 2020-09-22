import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { AbstractRepository } from './AbstractRepository'
import { knex } from '../database/knex/dbConnection'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { studentsTableName } from '../database/common/studentsTable'
import { usersTableName } from '../database/common/usersTable'

export interface testeDTO {
  students : number,
  ra: number,
  firstName: string
}
export class NoteFoulsRepository extends AbstractRepository<INoteFouls> {
  protected readonly table = noteFoulsTable

  getByRaStudent = async (ra: number): Promise<testeDTO[]> => await knex(noteFoulsTable)
    .innerJoin(`${studentsTableName} as s`, 't1.students', 's.id')
    .innerJoin(`${usersTableName} as u`, 'u.id', 's.user')
    .select(
      't1.students',
      's.ra',
      'u.firstName'
    )
    .where('s.ra', ra)

  // selectByStudentId = async (students: number): Promise<INoteFouls> => await knex(noteFoulsTable)
  //   .select('*')
  //   .where({ students })
  //   .first()
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
