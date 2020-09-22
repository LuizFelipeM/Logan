import { inject } from 'inversify'
import { INoteFoulsDto } from '../domain/contracts/INoteFoulsDto'
import { INoteFouls } from '../domain/interfaces/entities/INoteFouls'
import { NoteFoulsRepository, testeDTO } from '../repositories/NoteFoulsRepository'
import { AbstractService } from './AbstractService'

export class NoteFoulsService extends AbstractService<INoteFouls, NoteFoulsRepository> {
  constructor (
    @inject(NoteFoulsRepository)
    protected readonly repository: NoteFoulsRepository
  ) {
    super()
  }// needs mapper to complete

  getByRa = async (id: number): Promise<testeDTO[]> => {
    if (id) {
      return await this.repository.getByRaStudent(id)
    } else {
      throw new Error('TA ERRADO PORRA')
    }
  }
}

// const getNoteFouls = async (): Promise<INoteFouls[]> => await noteFoulsRepository.getNoteFouls()
// const getNoteFoulsByStudentId = async (id: number): Promise<INoteFouls> => await noteFoulsRepository.getNoteFoulByStudentId(id)

// const createNoteFouls = async (noteFouls: Omit<INoteFouls, 'id'>): Promise<INoteFouls> => noteFoulsRepository.insertNoteFouls(noteFouls)

// export const noteFoulsService = {
//   getNoteFouls,
//   // getNoteFoulsByStudentId,
//   createNoteFouls
// }
