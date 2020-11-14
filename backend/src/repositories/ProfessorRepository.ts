import { disciplinesTableName } from '../database/common/disciplinesTable'
import { professorsTable } from '../database/common/professorsTable'
import { subjectsTableName } from '../database/common/subjectsTable'
import { usersTableName } from '../database/common/usersTable'
import { knex } from '../database/knex/dbConnection'
import { IProfessorDetailedDto } from '../domain/interfaces/contracts/IProfessorDetailedDto'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { AbstractRepository } from './AbstractRepository'
import { jsonArray } from './utils/aggJson'

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
}
