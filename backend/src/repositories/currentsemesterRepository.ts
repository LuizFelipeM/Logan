import { semestersTable } from '../database/common/semestersTable'
import { ISemester } from '../domain/interfaces/entities/ICurrentSemester'
import { AbstractRepository } from './AbstractRepository'

export class SemesterRepository extends AbstractRepository<ISemester> {
  constructor () {
    super(semestersTable)
  }
}
