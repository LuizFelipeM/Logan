import { ITypeDisciplineAndWorkloadDto } from '../interfaces/contracts/ITypeDisciplineAndWorkloadDto'
import { IDiscipline } from '../interfaces/models/IDiscipline'
import BaseService from './BaseService'

enum EndpointEnum {
  typeWorkload = '/typeWorkload'
}

class DisciplineService extends BaseService<IDiscipline> {
  constructor() {
    super('discipline')
  }

  getAllWithDisciplineTypeAndWorkload = (): Promise<ITypeDisciplineAndWorkloadDto[]> => this.GET(EndpointEnum.typeWorkload)
}

const disciplineService = new DisciplineService()

export default disciplineService
