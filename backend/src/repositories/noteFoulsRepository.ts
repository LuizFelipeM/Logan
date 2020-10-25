import { noteFoulsTable } from '../database/common/noteFoulsTable'
import { AbstractRepository } from './AbstractRepository'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'

export class NoteFoulsRepository extends AbstractRepository<INoteFouls> {
  constructor () {
    super(noteFoulsTable)
  }
}
