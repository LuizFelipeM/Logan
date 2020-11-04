import { IAnoLetivo } from '../interfaces/IAnoLetivo'
import BaseService from './BaseService'

class AnoLetivoService extends BaseService<IAnoLetivo> {
  constructor() {
    super('AnoLetivo')
  }
}

export default new AnoLetivoService()
