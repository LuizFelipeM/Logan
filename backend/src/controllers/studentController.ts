import { Router, Request, Response } from 'express'
import { studentService } from '../services/studentService'
import { IStudent } from '../domain/interfaces/IStudent'

export const studentController = Router()

studentController.get('/get-all', async (req: Request, res: Response) => {
  const { limit } = req.query

  const students = await studentService.getStudents(Number(limit))

  return res.json(students)
})

studentController.post('/', async (req: Request, res: Response) => {
  const student: IStudent = req.body

  const createdStudent = await studentService.createStudent(student)

  return res.json(createdStudent)
})
