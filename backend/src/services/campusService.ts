
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { campusRepository } from '../repositories/campusRepository'

const getCampus = async (): Promise<ICampus[]> => await campusRepository.getCampus()
const getCampusById = async (id: number): Promise<ICampus> => await campusRepository.getCampusById(id)

const createCampus = async (campus: ICampus): Promise<ICampus> => await campusRepository.insertCampus(campus)

export const campusService = {
  getCampus,
  getCampusById,
  createCampus
}
