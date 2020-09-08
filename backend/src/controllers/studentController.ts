import { Router, Request, Response } from 'express'
import { studentService } from '../services/studentService'
import { IStudent } from '../domain/interfaces/IStudent'

export const studentController = Router()

studentController.get('/get-all', async (req: Request, res: Response) => {
  const students = await studentService.getStudents()

  return res.json(students)
})

studentController.get('/get', async (req: Request, res: Response) => {
  const { id, userId } = req.query

  let students: IStudent | undefined

  if (id) {
    students = await studentService.getStudentById(Number(id))
  } else if (userId) {
    students = await studentService.getStudentByUserId(Number(userId))
  }

  return res.json(students)
})

studentController.post('/', async (req: Request, res: Response) => {
  const student: IStudent = req.body

  const createdStudent = await studentService.createStudent(student)

  return res.json(createdStudent)
})
