import { inject } from 'inversify'
import { DisicplineDto } from '../domain/interfaces/contracts/DisciplineDto'
import { ICourseDto } from '../domain/interfaces/contracts/ICourseDto'
import { ITypeDisciplineDto } from '../domain/interfaces/contracts/ITypeDiciplineDto'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { toDisciplineDto } from '../domain/mappers/DisciplineMapper'
import { CoursesRepository } from '../repositories/coursesRepository'
import { DisciplineRepository } from '../repositories/DisciplineRepository'
import { TypeDisciplineRepository } from '../repositories/typeDisciplineRepository'

import { AbstractService } from './AbstractService'

export class DisciplineService extends AbstractService<IDiscipline, DisciplineRepository> {
  constructor (
  @inject(DisciplineRepository)
  protected readonly repository: DisciplineRepository,

  @inject(TypeDisciplineRepository)
  protected readonly typeDisciplineRepository: TypeDisciplineRepository,

  @inject(CoursesRepository)
  protected readonly courseRepository: CoursesRepository
  ) { super() }

  // getAllDisciplineWithTypeAndWorkload = async (): Promise<IDisciplineDto[]> => { // DTO feita para retornar TUDO
  //   const disciplines = await this.repository.selectAll()
  //   const courses = await this.courseRepository.selectAllCourseDto()
  //   const typeDisciplines = await this.typeDisciplineRepository.selectAll()
  // const disciplinesDto = disciplines.map(dis => toDisciplineDto(dis, typeDisciplines.find(type => type.id === dis.typeDiscipline) as ITypeDisciplineDto, courses.find(course => course.id === dis.course) as ICourseDto))

  //   return disciplinesDto
  // }

  getDisciplineWithTypeandWorkload = async (): Promise<DisicplineDto[]> => {
    const disciplines = await this.repository.selectAll()
    const typeDiscipline = await this.typeDisciplineRepository.selectAll()
    console.log(disciplines)
    const disTypeAndWorkload = disciplines.map(dis => toDisciplineDto(dis, typeDiscipline.find(type => type.id === dis.typeDiscipline)))

    return disTypeAndWorkload
  }
}
