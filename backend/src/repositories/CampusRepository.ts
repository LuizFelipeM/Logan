import { campusTable } from '../database/common/campusTable'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { AbstractRepository } from './AbstractRepository'

export class CampusRepository extends AbstractRepository<ICampus> {
  constructor () {
    super(campusTable)
  }
}
