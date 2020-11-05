import { StudentsRepository } from '../repositories/StudentRepository'
import { AbstractService } from './AbstractService'
import { inject } from 'inversify'
import { IStudent } from '../domain/interfaces/entities/IStudent'
import { ClassesRepository } from '../repositories/ClassesRepository'
import { SemesterRepository } from '../repositories/SemesterRepository'
import { IClassStudentsAndSemesterDto } from '../domain/interfaces/contracts/IClassesStudentsAndSemesterDto'

export class StudentService extends AbstractService<IStudent, StudentsRepository> {
  constructor (
    @inject(StudentsRepository)
    protected readonly studentsRepository: StudentsRepository,

    @inject(ClassesRepository)
    protected readonly classesRepository: ClassesRepository,

    @inject(SemesterRepository)
    protected readonly semesterRepository: SemesterRepository
  ) { super(studentsRepository) }

  academicYear = async (): Promise<IClassStudentsAndSemesterDto[]> => {
    return this.studentsRepository.getClassesStudentsAndSemester()
  }
}
