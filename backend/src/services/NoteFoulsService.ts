import { inject } from 'inversify'
import { IAvaregeCouseDto } from '../domain/contracts/IAvaregeCourseDto'
import { IFrequencyDto } from '../domain/contracts/IFrequencyDto'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { DisciplineRepository } from '../repositories/DisciplineRepository'
import { NoteFoulsRepository } from '../repositories/NoteFoulsRepository'
import { StudentsRepository } from '../repositories/StudentRepository'
import { AbstractService } from './AbstractService'

export class NoteFoulsService extends AbstractService<INoteFouls, NoteFoulsRepository> {
  constructor (
    @inject(NoteFoulsRepository)
    protected readonly noteFoulsRepository: NoteFoulsRepository,

    @inject(CoursesRepository)
    protected readonly coursesRepository: CoursesRepository,

    @inject(DisciplineRepository)
    protected readonly disciplineRepository:DisciplineRepository,

    @inject(StudentsRepository)
    protected readonly studentsRepository:StudentsRepository
  ) { super(noteFoulsRepository) }// needs mapper to complete

  AvaregeWithCourse = async (): Promise<IAvaregeCouseDto[]> => {
    return this.noteFoulsRepository.selectFinalNoteWithCourse()
  }

  FrequencyOfCourse = async (): Promise<IFrequencyDto[]> => {
    return this.noteFoulsRepository.selectFrequencyOfNoteSandFouls()
  }
}
