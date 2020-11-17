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

getRegistryDetailed = (): Promise<IRegistryDetailedDto[]> => this.GET(EndpointEnum.RegistryDetailedSearch)

getDetailedSearch = (text: string): Promise<IRegistryDetailedDto[]> => this.GET(EndpointEnum.RegistryDetailedSearch, { params: { text } })
}
const registryService = new RegistryService()
export default registryService
