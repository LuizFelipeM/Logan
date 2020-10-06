import { inject } from 'inversify'
import { ITypeAndWorkloadDto } from '../domain/interfaces/contracts/ITypeAndWorkloadDto'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { toTypeAndWorkload } from '../domain/mappers/DisciplineMapper'
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

  getDisciplineWithTypeandWorkload = async (): Promise<ITypeAndWorkloadDto[]> => {
    const disciplines = await this.repository.selectAll()
    const typeDiscipline = await this.typeDisciplineRepository.selectAll()
    const disTypeAndWorkload = disciplines.map(dis => toTypeAndWorkload(dis, typeDiscipline.find(type => type.id === dis.typeDiscipline)))

    return disTypeAndWorkload
  }
}
