import { campusTable } from '../database/common/campusTable'
import { coursesTableName } from '../database/common/coursesTable'
import { ICouseNameSemesterAndCampusNameDto } from '../domain/interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { AbstractRepository } from './AbstractRepository'

export class CampusRepository extends AbstractRepository<ICampus> {
  constructor () {
    super(campusTable)
  }

  getNameAndUf = async (): Promise<ICampus[]> => await this.session
    .select(
      'name',
      'uf'
    )

  getCourseNameTotalSemestersAndCampusName = async (): Promise<ICouseNameSemesterAndCampusNameDto[]> => this.session
    .innerJoin({ c: coursesTableName }, 't1.id', 'c.campus')
    .select(
      'c.name',
      'c.total_semester',
      't1.name as campus_name'
    )
    .groupBy('c.name', 'c.total_semester', 't1.name')

  insertCampus= async (): Promise<ICampus[]> => this.session
    .insert({
      name: 'teste',
      uf: 'tt'
    })
}
