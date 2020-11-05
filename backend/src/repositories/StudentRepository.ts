import { studentsTable } from '../database/common/studentsTable'
import { AbstractRepository } from './AbstractRepository'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { IStudentCountByClassDto } from '../domain/interfaces/contracts/IStudentCountByClassDto'

export class StudentsRepository extends AbstractRepository<IStudent> {
  constructor () {
    super(studentsTable)
  }

  selectByUserId = async (user: number): Promise<IStudent | undefined > => await this.session
    .select('*')
    .where({ user })
    .first()

countStudentsInClass = async (): Promise<IStudentCountByClassDto[]> => await this.session
  .select('class')
  .count('class')
  .groupBy('class')
}
