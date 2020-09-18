import { ICourse } from '../domain/interfaces/ICourse'
import { courseRepository } from '../repositories/courseRepository'

const getCourse = async (): Promise<ICourse[]> => courseRepository.getCourse()

const getCourseById = async (id: number): Promise<ICourse> => await courseRepository.getCourseById(id)

const createCourse = async (Course: ICourse): Promise<ICourse> => await courseRepository.insertCourse(Course)

export const courseService = {
  getCourse,
  getCourseById,
  createCourse
}
