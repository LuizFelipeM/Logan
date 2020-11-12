import { ITypeDiscipline } from '../interfaces/models/ITypeDicipline'
import BaseService from './BaseService'

class TypeDisciplineService extends BaseService<ITypeDiscipline> {
  constructor() {
    super('typeDiscipline')
  }
}

const typeDisciplineService = new TypeDisciplineService()

export default typeDisciplineService
