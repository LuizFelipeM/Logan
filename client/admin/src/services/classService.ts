import { IClassDetailedViewDto } from '../interfaces/contracts/IClassDetailedViewDto'
import { IClassMinifyViewDto } from '../interfaces/contracts/IClassMinifyViewDto'
import { IClass } from '../interfaces/models/IClass'
import BaseService from './BaseService'

enum EndpointEnum {
  allClassesMinified = '/getAllClassesMinified',
  detailedView = '/detailedView'
}

class ClassService extends BaseService<IClass> {
  constructor() {
    super('class')
  }

  getAllClassMinify = (): Promise<IClassMinifyViewDto[]> => this.GET(EndpointEnum.allClassesMinified)

  getWithDetails = (id: number): Promise<IClassDetailedViewDto[]> => this.GET(EndpointEnum.detailedView, { params: { id } })
}

const classService = new ClassService()

export default classService
