import { inject } from 'inversify'
import { ICouseNameSemesterAndCampusNameDto } from '../domain/interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { CampusRepository } from '../repositories/CampusRepository'
import { AbstractService } from './AbstractService'

export class CampusService extends AbstractService<ICampus, CampusRepository> {
  constructor (
    @inject(CampusRepository)
    protected readonly campusRepository: CampusRepository
  ) { super(campusRepository) }

  getNameAndUfCampus = (): Promise<ICampus[]> => this.campusRepository.getNameAndUf()

  getCourseNameSemesterAndCampusName = (): Promise<ICouseNameSemesterAndCampusNameDto[]> => this.campusRepository.getCourseNameTotalSemestersAndCampusName()

  insertCampusNameAndUf = (): Promise<ICampus[]> => this.campusRepository.insertCampus()
}
