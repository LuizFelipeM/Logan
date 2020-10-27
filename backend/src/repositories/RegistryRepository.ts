import { registriesTable } from '../database/common/registriesTable'
import { IRegistry } from '../domain/interfaces/entities/IRegistry'
import { AbstractRepository } from './AbstractRepository'

export class RegistryRepository extends AbstractRepository<IRegistry> {
  constructor () {
    super(registriesTable)
  }
}
