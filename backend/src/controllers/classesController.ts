import { Router, Request, Response } from 'express'
import { classService } from '../services/classesService'
import { IClass } from '../domain/interfaces/IClass'

export const classController = Router()

classController.get('/get-all', async (req: Request, res: Response) => {
  try {
    const classes = await classService.getClass()

    return res.json(classes)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

classController.get('/get', async (req: Request, res: Response) => {
  try {
    const { id } = req.query

    let classes: IClass | undefined

    if (id) {
      classes = await classService.getClassById(Number(id))
    }
    return res.json(classes)
  } catch (error) {
    console.error()
    return res.status(404).json({ error })
  }
})

classController.post('/', async (req: Request, res: Response) => {
  try {
    const classes: IClass = req.body

    const createdClass = await classService.createClass(classes)

    return res.json(createdClass)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})
