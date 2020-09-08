import { studentRepository } from '../repositories/studentRepository'
import { IStudent } from '../domain/interfaces/IStudent'

const getStudents = async (): Promise<IStudent[]> => await studentRepository.getStudents()
const getStudentById = async (id: number): Promise<IStudent> => await studentRepository.getStudentById(id)
const getStudentByUserId = async (id: number): Promise<IStudent> => await studentRepository.getStudentByUserId(id)

const createStudent = async (student: IStudent): Promise<IStudent> => await studentRepository.insertStudent(student)

export const studentService = {
  getStudents,
  getStudentById,
  getStudentByUserId,
  createStudent
}
