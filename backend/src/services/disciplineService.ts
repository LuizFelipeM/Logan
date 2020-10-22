import { inject } from 'inversify'
import { ITypeDisciplineAndWorkloadDto } from '../domain/interfaces/contracts/ITypeDisciplineAndWorkloadDto'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { toTypeDisciplineAndWorkload } from '../domain/mappers/DisciplineMapper'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { DisciplineRepository } from '../repositories/DisciplineRepository'
import { TypeDisciplineRepository } from '../repositories/typeDisciplineRepository'

import { AbstractService } from './AbstractService'

export class DisciplineService extends AbstractService<IDiscipline, DisciplineRepository> {
  constructor (
    @inject(DisciplineRepository)
    protected readonly disciplineRepository: DisciplineRepository,

    @inject(TypeDisciplineRepository)
    protected readonly typeDisciplineRepository: TypeDisciplineRepository,

    @inject(CoursesRepository)
    protected readonly courseRepository: CoursesRepository
  ) { super(disciplineRepository) }

  getDisciplineWithTypeandWorkload = async (): Promise<ITypeDisciplineAndWorkloadDto[]> => {
    const disciplines = await this.disciplineRepository.selectAll()
    const typeDiscipline = await this.typeDisciplineRepository.selectAll()
    const disTypeAndWorkload = disciplines.map(dis => toTypeDisciplineAndWorkload(dis, typeDiscipline.find(type => type.id === dis.type_discipline)))

    return disTypeAndWorkload
  }
}
