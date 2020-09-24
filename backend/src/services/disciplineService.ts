import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { disciplineRepository } from '../repositories/disciplineRepository'

const getDisciplineById = async (id: number): Promise<IDiscipline> => await disciplineRepository.getdisciplineById(id)

const getDiscipline = async (): Promise<IDiscipline[]> => await disciplineRepository.getdiscipline()

const insertDiscipline = async (discipline: Omit<IDiscipline, 'id'>): Promise<IDiscipline> => await disciplineRepository.insertdiscipline(discipline)

export const disciplineService = {
  getDiscipline,
  getDisciplineById,
  insertDiscipline
}
