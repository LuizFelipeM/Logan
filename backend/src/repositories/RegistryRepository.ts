import { campusTableName } from '../database/common/campusTable'
import { coursesTableName } from '../database/common/coursesTable'
import { registriesStatusTableName } from '../database/common/registriesStatusTable'
import { registriesTable } from '../database/common/registriesTable'
import { studentsTableName } from '../database/common/studentsTable'
import { usersTableName } from '../database/common/usersTable'
import { knex } from '../database/knex/dbConnection'
import { IRegistryDetailedDto } from '../domain/interfaces/contracts/IRegistryDetailedDto'
import { IRegistry } from '../domain/interfaces/entities/IRegistry'
import { AbstractRepository } from './AbstractRepository'

export class RegistryRepository extends AbstractRepository<IRegistry> {
  constructor () {
    super(registriesTable)
  }

  selectAllDetailed = async (): Promise<IRegistryDetailedDto[]> => {
    const res = await this.session
      .innerJoin(`${studentsTableName} as s`, 't1.id', 's.id')
      .innerJoin(`${usersTableName} as u`, 't1.id', 'u.id')
      .innerJoin(`${campusTableName} as c`, 't1.id', 'c.id')
      .innerJoin(`${coursesTableName} as cs`, 't1.id', 'cs.id')
      .innerJoin(`${registriesStatusTableName} as r`, 't1.id', 'r.id')
      .select(
        's.ra',
        's.class as class_id',
        'c.name as campus_name',
        'cs.name as course_name',
        'r.name as registry_status',
        't1.start_registry',
        't1.end_estimate',
        knex().raw('concat(u.first_name,\' \', u.last_name) as full_name')
      )
      .groupBy('s.ra', 's.class', 'u.first_name', 'u.last_name', 'c.name', 'cs.name', 'r.name', 't1.start_registry', 't1.end_estimate')
    return res
  }

  selectDetailedSearch = async (text : string): Promise<IRegistryDetailedDto[]> => {
    const res = await this.session
      .innerJoin(`${studentsTableName} as s`, 't1.id', 's.id')
      .innerJoin(`${usersTableName} as u`, 't1.id', 'u.id')
      .innerJoin(`${campusTableName} as c`, 't1.id', 'c.id')
      .innerJoin(`${coursesTableName} as cs`, 't1.id', 'cs.id')
      .innerJoin(`${registriesStatusTableName} as r`, 't1.id', 'r.id')
      .select(
        's.ra',
        's.class as class_id',
        'c.name as campus_name',
        'cs.name as course_name',
        'r.name as registry_status',
        't1.start_registry',
        't1.end_estimate',
        knex().raw('concat(u.first_name,\' \', u.last_name) as full_name')
      )
      .where({ 'u.first_name': text })
      .orWhere({ 'u.last_name': text })
      .orWhere({ 'c.name': text })
      .orWhere({ 's.ra': parseInt(text) ? parseInt(text) : 0 })
      .groupBy('s.ra', 's.class', 'u.first_name', 'u.last_name', 'c.name', 'cs.name', 'r.name', 't1.start_registry', 't1.end_estimate')
    return res
  }
}
