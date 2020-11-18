import { inject } from 'inversify'
import { controller, httpGet, queryParam } from 'inversify-express-utils'
import { IRegistry } from '../domain/interfaces/entities/IRegistry'
import { RegistryService } from '../services/RegistryService'
import { AbstractController } from './AbstractController'

@controller('/registry')
export class RegistryController extends AbstractController<IRegistry, RegistryService> {
  constructor (
    @inject(RegistryService)
    protected readonly registryService: RegistryService
  ) { super(registryService) }

  @httpGet('/RegistryDetailedSearch')
  private DetailedSearch (@queryParam('text') text: string) {
    return this.registryService.RegistryDetailedSearch(text)
  }
}
