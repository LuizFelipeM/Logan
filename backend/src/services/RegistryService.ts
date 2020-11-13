import { inject } from 'inversify'
import { IRegistryDetailedDto } from '../domain/interfaces/contracts/IRegistryDetailedDto'
import { IRegistry } from '../domain/interfaces/entities/IRegistry'
import { CampusRepository } from '../repositories/CampusRepository'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { RegistryRepository } from '../repositories/RegistryRepository'
import { StudentsRepository } from '../repositories/StudentRepository'
import { UserRepository } from '../repositories/UserRepository'
import { AbstractService } from './AbstractService'

export class RegistryService extends AbstractService<IRegistry, RegistryRepository> {
  constructor (
    @inject(RegistryRepository)
    protected readonly registryRepository:RegistryRepository,
    @inject(UserRepository)
    protected readonly userRepository:UserRepository,
    @inject(CampusRepository)
    protected readonly campusrepository:CampusRepository,
    @inject(StudentsRepository)
    protected readonly studentsRepository:StudentsRepository,
    @inject(CoursesRepository)
    protected readonly coursesRepository:CoursesRepository
  ) { super(registryRepository) }

  RegistryDetailed = async (): Promise<IRegistryDetailedDto[]> => {
    const detailed = await this.registryRepository.selectAllDetailed()
    return detailed.map(d => {
      const date = new Date(d.start_registry)
      const edate = new Date(d.end_estimate)
      const end_estimate = `${edate.getDate()}/${edate.getMonth() + 1}/${edate.getFullYear()}`
      const start_registry = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      return ({ ...d, start_registry, end_estimate })
    })
  }

  RegistryDetailedSearch = async (name : string): Promise<IRegistryDetailedDto[]> => {
    const detailed = await this.registryRepository.selectDetailedSearch(name)
    return detailed.map(d => {
      const date = new Date(d.start_registry)
      const edate = new Date(d.end_estimate)
      const end_estimate = `${edate.getDate()}/${edate.getMonth() + 1}/${edate.getFullYear()}`
      const start_registry = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      return ({ ...d, start_registry, end_estimate })
    })
  }
}
