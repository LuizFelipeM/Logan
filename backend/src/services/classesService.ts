import { classesRepository } from '../repositories/classesRepository'
import { IClass } from '../domain/interfaces/IClass'

const getClass = async (): Promise<IClass[]> => await classesRepository.getClass()
const getClassById = async (id: number): Promise<IClass> => await classesRepository.getClassById(id)

const createClass = async (Class: IClass): Promise<IClass> => await classesRepository.insertClass(Class)

export const classService = {
  getClass,
  getClassById,
  createClass
}
