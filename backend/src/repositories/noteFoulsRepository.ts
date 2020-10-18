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
}
