import { Router, Request, Response } from 'express'
import { IDiscipline } from '../domain/interfaces/IDiscipline'
import { disciplineService } from '../services/disciplineService'

export const disciplineController = Router()

disciplineController.get('/get-all', async (req: Request, res: Response) => {
  try {
    const discipline = await disciplineService.getDiscipline()

    return res.json(discipline)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

disciplineController.get('/get', async (req: Request, res: Response) => {
  try {
    const { disciplineId } = req.query
    let discipline: IDiscipline | undefined

    if (disciplineId) {
      discipline = await disciplineService.getDisciplineById(Number(disciplineId))
    }
    return res.json(discipline)
  } catch (error) {
    console.error(error)
    return res.status(404).json(error)
  }
})

disciplineController.post('/', async (req: Request, res: Response) => {
  try {
    const discipline: Omit<IDiscipline, 'id'> = req.body

    const createDiscipline = await disciplineService.insertDiscipline(discipline)

    return res.json(createDiscipline)
  } catch (error) {
    console.error(error)
    return res.status(404).json(error)
  }
})
