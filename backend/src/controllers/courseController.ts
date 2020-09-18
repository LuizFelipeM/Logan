import { Router, Request, Response } from 'express'
import { ICourse } from '../domain/interfaces/ICourse'
import { courseService } from '../services/courseService'

export const courseController = Router()

courseController.get('/get-all', async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getCourse()

    return res.json(courses)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

courseController.get('/get', async (req: Request, res: Response) => {
  try {
    const { id } = req.query

    let courses: ICourse | undefined

    if (id) {
      courses = await courseService.getCourseById(Number(id))
    }
    return res.json(courses)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

courseController.post('/', async (req: Request, res: Response) => {
  try {
    const courses: ICourse = req.body

    const createdCourse = await courseService.createCourse(courses)

    return res.json(createdCourse)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})
