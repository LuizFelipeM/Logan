import { Router, Request, Response } from 'express'
import { ICalendar } from '../domain/interfaces/entities/ICalendar'
import { calendarService } from '../services/calendarService'

export const calendarController = Router()

calendarController.get('/get-all', async (req: Request, res: Response) => {
  try {
    const calendar = await calendarService.getCalendar()

    return res.json(calendar)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

calendarController.get('/get', async (req: Request, res: Response) => {
  try {
    const { id } = req.query

    let calendar: ICalendar | undefined

    if (id) {
      calendar = await calendarService.getCalendarById(Number(id))
    }
    return res.json(calendar)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})

calendarController.post('/', async (req: Request, res: Response) => {
  try {
    const calendar: ICalendar = req.body

    const createdCalendar = await calendarService.createCalendar(calendar)

    return res.json(createdCalendar)
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error })
  }
})
