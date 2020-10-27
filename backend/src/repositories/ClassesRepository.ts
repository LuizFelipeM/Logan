import { classesTable } from '../database/common/classesTable'
import { IClass } from '../domain/interfaces/entities/IClass'
import { AbstractRepository } from './AbstractRepository'

export class ClasseRepository extends AbstractRepository<IClass> {
  constructor () {
    super(classesTable)
  }
}
