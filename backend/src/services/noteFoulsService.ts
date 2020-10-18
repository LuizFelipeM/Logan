import { inject } from 'inversify'
import { ISpecificCourseDto } from '../domain/interfaces/contracts/ISpecificCourseDto'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { toSpecifCourseDto } from '../domain/mappers/CourseMapper'
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
  ) { super() }

  // getSpecificationsCourse = async (): Promise<ISpecificCourseDto[]> => {
  //   const teste2 = await this.repository.selectAll()
  //   const profs = await this.professorRepository.getProfessorsDisciplinesAndClasses()
  //   const numberFrequency = await this.repository.getAvgNumberOfStudentsAndFrequency()
  //   const semes = await this.semesterRepository.getSemester()
  //   const specifCourse = profs.map(prof => {
  //     const teste = numberFrequency.find(nf =>)
  //     toSpecifCourseDto(prof.classId)
  //   })
  // }
}
