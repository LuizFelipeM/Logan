import { inject } from 'inversify'
import { IRegistry } from '../domain/interfaces/entities/IRegistry'
import { RegistryRepository } from '../repositories/RegistryRepository'
import { AbstractService } from './AbstractService'

export class RegistryService extends AbstractService<IRegistry, RegistryRepository> {
  constructor (
    @inject(RegistryRepository)
    protected readonly registryRepository: RegistryRepository
  ) { super(registryRepository) }
}
