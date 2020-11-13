import { IRegistryDetailedDto } from '../interfaces/contracts/IRegistryDetailedDto'
import { IRegistry } from '../interfaces/models/IRegistry'
import BaseService from './BaseService'

enum EndpointEnum {
    RegistryDetailed = '/RegistryDetailed',
    RegistryDetailedSearch = '/RegistryDetailedSearch'
  }

class RegistryService extends BaseService<IRegistry> {
  constructor() {
    super('registry')
  }

getRegistryDetailed = (): Promise<IRegistryDetailedDto[]> => this.GET(EndpointEnum.RegistryDetailed)

getDetailedSearch = (name: string): Promise<IRegistryDetailedDto[]> => this.GET(EndpointEnum.RegistryDetailedSearch, { params: { name } })
}
const registryService = new RegistryService()
export default registryService
