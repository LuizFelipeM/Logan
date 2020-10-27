import { IClassMinifyViewDto } from '../interfaces/contracts/IClassMinifyViewDto'
import { IClass } from '../interfaces/models/IClass'
import BaseService from './BaseService'

enum EndpointEnum {
  allClassesMinified = '/getAllClassesMinified'
}

class ClassService extends BaseService<IClass> {
  constructor() {
    super('class')
  }

  getAllClassMinify = (): Promise<IClassMinifyViewDto[]> => this.GET(EndpointEnum.allClassesMinified)
}

const classService = new ClassService()

export default classService
