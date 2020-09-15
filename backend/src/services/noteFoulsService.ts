import { INoteFouls } from '../domain/interfaces/INoteFouls'
import { noteFoulsRepository } from '../repositories/noteFoulsRepository'

const getNoteFouls = async (): Promise<INoteFouls[]> => await noteFoulsRepository.getNoteFouls()
const getNoteFoulsById = async (id: number): Promise<INoteFouls> => await noteFoulsRepository.getNoteFoulById(id)

const createNoteFouls = async (noteFouls: INoteFouls): Promise<INoteFouls> => noteFoulsRepository.insertNoteFouls(noteFouls)

export const noteFoulsService = {
  getNoteFouls,
  getNoteFoulsById,
  createNoteFouls
}
