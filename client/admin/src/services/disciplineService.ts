import { IDisciplineDetailedDto } from '../interfaces/contracts/IDisciplineDetailedDto'
import { ITypeDisciplineAndWorkloadDto } from '../interfaces/contracts/ITypeDisciplineAndWorkloadDto'
import { IDiscipline } from '../interfaces/models/IDiscipline'
import BaseService from './BaseService'

enum EndpointEnum {
  typeWorkload = '/typeWorkload',
  detailedView = '/detailedView'
}

class DisciplineService extends BaseService<IDiscipline> {
  constructor() {
    super('discipline')
  }

  getAllWithDisciplineTypeAndWorkload = (): Promise<ITypeDisciplineAndWorkloadDto[]> => this.GET(EndpointEnum.typeWorkload)

  getWithDetails = (id: number): Promise<IDisciplineDetailedDto[]> => this.GET(EndpointEnum.detailedView, { params: { id } })
}

const disciplineService = new DisciplineService()

export default disciplineService
