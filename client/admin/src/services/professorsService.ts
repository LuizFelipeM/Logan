import { IProfessorMinifiedDto } from '../interfaces/contracts/IProfessorDetailedDto'
import { IProfessorEditDto } from '../interfaces/contracts/IProfessorEditDto'
import { IProfessor } from '../interfaces/models/IProfessor'
import BaseService from './BaseService'

enum EndpointEnum {
  getAllDetailed = '/getAllDetailed',
  getProfessorToEdit = '/getProfessorToEdit',
  updateProfessorUserAndSubject = '/updateProfessorUserAndSubject'
}

class ProfessorService extends BaseService<IProfessor> {
  constructor() {
    super('professor')
  }

  getAllMinified = (): Promise<IProfessorMinifiedDto[]> => this.GET(EndpointEnum.getAllDetailed)

  getProfessorToEdit = (id: number): Promise<IProfessorEditDto> => this.GET(EndpointEnum.getProfessorToEdit, { params: { id } })

  updateProfessorUserAndSubject = (): Promise<void> => this.PATCH(EndpointEnum.updateProfessorUserAndSubject)
}

const professorService = new ProfessorService()

export default professorService
