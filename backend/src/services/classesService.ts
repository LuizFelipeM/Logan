import { ClassesRepository } from "../repositories/classesRepository"
import { IClass } from "../domain/interfaces/IClass"


const getClass = async (id: number): Promise<IClass> => await ClassesRepository.getClass(id)
const getClassById = async (id: number): Promise<IClass[]> => await ClassesRepository.getClassById(id)
const createClass = async (profile: Omit<IProfile, 'id' | 'rules'>): Promise<IClass> => await ClassesRepository.insertClass(class)

export const profileService = {
  getClass,
  getClassById,
  createClass
}