import { campusTable } from '../database/common/campusTable'
import { coursesTableName } from '../database/common/coursesTable'
import { ICouseNameSemesterAndCampusNameDto } from '../domain/interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { INewCampusAndUfDto } from '../domain/interfaces/contracts/INewCampusAndUfDto'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { AbstractRepository } from './AbstractRepository'

export class CampusRepository extends AbstractRepository<ICampus> {
  constructor () {
    super(campusTable)
  }

  getCourseNameTotalSemestersAndCampusName = async (): Promise<ICouseNameSemesterAndCampusNameDto[]> => this.session
    .innerJoin({ c: coursesTableName }, 't1.id', 'c.campus')
    .select(
      'c.name as course_name',
      'c.total_semester',
      't1.name as campus_name'
    )
    .groupBy('c.name', 'c.total_semester', 't1.name')

  insertCampus= async (newCampus:INewCampusAndUfDto): Promise<ICampus[]> => this.session
    .insert({
      name: newCampus.campus_name,
      uf: newCampus.name_uf
    })
}
