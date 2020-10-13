import { inject } from 'inversify'
import { ISpecificCourseDto } from '../domain/interfaces/contracts/ISpecificCourseDto'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { ClasseRepository } from '../repositories/classesRepository'
import { CurrentsemesterRepository } from '../repositories/currentsemesterRepository'
import { NoteFoulsRepository } from '../repositories/NoteFoulsRepository'
import { ProfessorRepository } from '../repositories/professorRepository'
import { AbstractService } from './AbstractService'

export class NoteFoulsService extends AbstractService<INoteFouls, NoteFoulsRepository> {
  constructor (
    @inject(NoteFoulsRepository)
    protected readonly repository: NoteFoulsRepository,

    @inject(ClasseRepository)
    protected readonly classRepository: ClasseRepository,

    @inject(CurrentsemesterRepository)
    protected readonly semesterRepository: CurrentsemesterRepository,

    @inject(ProfessorRepository)
    protected readonly professorRepository: ProfessorRepository
  ) { super() }// needs mapper to complete

  getSpecificCourse = async (): Promise<ISpecificCourseDto[]> => {
    const classe = await this.classRepository.selectAll()
    const semester = await this.semesterRepository.selectAll()
    const professor = await this.professorRepository.selectAll()
    const frequency = await this.repository.getAvgNumberOfStudentsAndFrequency()

    return frequency
  }
}
