import { studentRepository } from '../repositories/studentRepository'
import { IStudent } from '../domain/interfaces/IStudent'

const getStudents = async (limit?: number): Promise<IStudent[]> => await studentRepository.getStudents(limit)

const createStudent = async (student: IStudent): Promise<IStudent> => await studentRepository.createStudent(student)

export const studentService = {
  getStudents,
  createStudent
}
