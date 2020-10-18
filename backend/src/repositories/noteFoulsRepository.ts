import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { AbstractRepository } from './AbstractRepository'
import { knex } from '../database/knex/dbConnection'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { studentsTableName } from '../database/common/studentsTable'
import { usersTableName } from '../database/common/usersTable'
import { classesTableName } from '../database/common/classesTable'

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

  getAvgNumberOfStudentsAndFrequency = async () : Promise<{frequency: number, avg: number}[]> => await knex(noteFoulsTable)
    .innerJoin(`${studentsTableName} as s`, 't1.students', 's.id')
    .innerJoin(`${classesTableName} as c`, 's.class', 'c.id')
    .count('s.id as N_de_Alunos')
    .select(
      knex.raw('round((cast(sum(fouls) as decimal) / (count(s.id) * 80)),2) as frequency'),
      knex.raw('round(avg(finalnote),2) as avg')
    )
}
