import { ITesteCalendarDto } from '../contracts/ITesteCalendarDto'
import { IAnoLetivo } from '../interfaces/IAnoLetivo'
import BaseService from './BaseService'

class AnoLetivoService extends BaseService<IAnoLetivo> {
  constructor() {
    super('AnoLetivo')
  }

  getAcademicYear = (): Promise<ITesteCalendarDto[]> => this.GET()
}

export default new AnoLetivoService()
