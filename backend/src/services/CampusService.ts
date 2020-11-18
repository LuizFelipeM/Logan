import { inject } from 'inversify'
import { ICouseNameSemesterAndCampusNameDto } from '../domain/interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { INewCampusAndUfDto } from '../domain/interfaces/contracts/INewCampusAndUfDto'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { CampusRepository } from '../repositories/CampusRepository'
import { AbstractService } from './AbstractService'

export class CampusService extends AbstractService<ICampus, CampusRepository> {
  constructor (
    @inject(CampusRepository)
    protected readonly campusRepository: CampusRepository
  ) { super(campusRepository) }

  getCourseNameSemesterAndCampusName = (): Promise<ICouseNameSemesterAndCampusNameDto[]> => this.campusRepository.getCourseNameTotalSemestersAndCampusName()

  createCampusNameAndUf = (newCampus:INewCampusAndUfDto): Promise<ICampus[]> => this.campusRepository.insertCampus(newCampus)
}
