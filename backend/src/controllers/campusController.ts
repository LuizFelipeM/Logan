import { Router, Request, Response } from 'express'
import { ICampus } from '../domain/interfaces/entities/ICampus'
import { campusService } from '../services/campusService'

export const campusController = Router()

campusController.get('/get-all', async (req: Request, res: Response) => {
  try {
    const campus = await campusService.getCampus()

    return res.json(campus)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

campusController.get('/get', async (req: Request, res: Response) => {
  try {
    const { id } = req.query

    let campus: ICampus | undefined

    if (id) {
      campus = await campusService.getCampusById(Number(id))
    }
    return res.json(campus)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

campusController.post('/', async (req: Request, res: Response) => {
  try {
    const campus: ICampus = req.body

    const createdCampus = await campusService.createCampus(campus)

    return res.json(createdCampus)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})
