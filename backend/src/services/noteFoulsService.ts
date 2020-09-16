import { INoteFouls } from '../domain/interfaces/INoteFouls'
import { noteFoulsRepository } from '../repositories/noteFoulsRepository'

const getNoteFouls = async (): Promise<INoteFouls[]> => await noteFoulsRepository.getNoteFouls()
const getNoteFoulsByStudentId = async (id: number): Promise<INoteFouls> => await noteFoulsRepository.getNoteFoulByStudentId(id)

const createNoteFouls = async (noteFouls: Omit<INoteFouls, 'id'>): Promise<INoteFouls> => noteFoulsRepository.insertNoteFouls(noteFouls)

export const noteFoulsService = {
  getNoteFouls,
  getNoteFoulsByStudentId,
  createNoteFouls
}
