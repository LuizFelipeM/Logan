<<<<<<< HEAD
import { knex } from '../database/knex/dbConnection'
import { classesTableName } from '../database/common/classesTable'
import { IClass } from '../domain/interfaces/entities/IClass'
=======
import { classesTable } from '../database/common/classesTable'
import { IClass } from '../domain/interfaces/entities/IClass'
import { AbstractRepository } from './AbstractRepository'
>>>>>>> develop

export class ClasseRepository extends AbstractRepository<IClass> {
  protected readonly table = classesTable
}
