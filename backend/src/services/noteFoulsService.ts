import { INoteFoulsDto } from '../domain/contracts/INoteFoulsDto'
import { INoteFouls } from '../domain/interfaces/INoteFouls'
import { NoteFoulsRepository, noteFoulsRepository } from '../repositories/noteFoulsRepository'
import { AbstractService } from './AbstractService'

export class NoteFoulsService extends AbstractService<INoteFouls, NoteFoulsRepository> {
  constructor () {
    super(noteFoulsRepository)
  }// needs mapper to complete
}

// const getNoteFouls = async (): Promise<INoteFouls[]> => await noteFoulsRepository.getNoteFouls()
// const getNoteFoulsByStudentId = async (id: number): Promise<INoteFouls> => await noteFoulsRepository.getNoteFoulByStudentId(id)

// const createNoteFouls = async (noteFouls: Omit<INoteFouls, 'id'>): Promise<INoteFouls> => noteFoulsRepository.insertNoteFouls(noteFouls)

// export const noteFoulsService = {
//   getNoteFouls,
//   // getNoteFoulsByStudentId,
//   createNoteFouls
// }

export const noteFoulsService = new NoteFoulsService()
