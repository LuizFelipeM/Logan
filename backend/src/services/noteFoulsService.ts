import { inject } from 'inversify'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { NoteFoulsRepository } from '../repositories/NoteFoulsRepository'
import { AbstractService } from './AbstractService'

export class NoteFoulsService extends AbstractService<INoteFouls, NoteFoulsRepository> {
  constructor (
    @inject(NoteFoulsRepository)
    protected readonly noteFoulsRepository: NoteFoulsRepository
  ) { super(noteFoulsRepository) }
}
