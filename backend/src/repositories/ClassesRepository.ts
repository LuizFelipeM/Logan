import { classesTable } from '../database/common/classesTable'
import { IClass } from '../domain/interfaces/entities/IClass'
import { AbstractRepository } from './AbstractRepository'

export class ClassesRepository extends AbstractRepository<IClass> {
  constructor () {
    super(classesTable)
  }
}
