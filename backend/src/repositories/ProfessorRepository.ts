import { disciplinesTableName } from '../database/common/disciplinesTable'
import { professorsTable } from '../database/common/professorsTable'
import { profilesTableName } from '../database/common/profilesTable'
import { subjectsTableName } from '../database/common/subjectsTable'
import { usersTableName } from '../database/common/usersTable'
import { knex } from '../database/knex/dbConnection'
import { IProfessorDetailedDto } from '../domain/interfaces/contracts/IProfessorDetailedDto'
import { IProfessorEditDto } from '../domain/interfaces/contracts/IProfessorEditDto'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { AbstractRepository } from './AbstractRepository'
import { jsonArray } from './utils/aggJson'
import { rowToJson } from './utils/rowToJson'

export class ProfessorRepository extends AbstractRepository<IProfessor> {
  constructor () {
    super(professorsTable)
  }

  selectAllDetailed = async (): Promise<IProfessorDetailedDto[]> => await this.session
    .select<IProfessorDetailedDto[]>(
      't1.id',
      't1.user',
      knex().raw('concat(u.first_name,\' \', u.last_name) as full_name'),
      jsonArray('d', 'discipline_names', 'name')
    )
    .innerJoin({ u: usersTableName }, 'u.id', 't1.user')
    .leftJoin({ s: subjectsTableName }, 's.professor', 't1.id')
    .leftJoin({ d: disciplinesTableName }, 'd.id', 's.discipline')
    .groupBy('t1.id', 't1.user', 'u.first_name', 'u.last_name')
    .orderBy('t1.id', 'asc')

  selectProfessorToEdit = async (id: number): Promise<IProfessorEditDto> => await this.session
    .select(
      't1.id',
      'u.first_name',
      'u.last_name',
      'p.id as profile',
      jsonArray('s', 'subjects')
    )
    .innerJoin({ u: usersTableName }, 'u.id', 't1.user')
    .innerJoin({ p: profilesTableName }, 'u.profile', 'p.id')
    .innerJoin({ s: subjectsTableName }, 's.professor', 't1.id')
    .where({ 't1.id': id })
    .groupBy(
      't1.id',
      'u.first_name',
      'u.last_name',
      'p.id'
    )
    .first()
}
