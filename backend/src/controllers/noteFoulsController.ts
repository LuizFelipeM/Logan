import { INoteFouls } from '../domain/interfaces/INoteFouls'
import { NoteFoulsService, noteFoulsService } from '../services/noteFoulsService'
import { AbstractController } from './AbstractController'

class NoteFoulsController extends AbstractController<INoteFouls, NoteFoulsService> {
  constructor () {
    super(noteFoulsService)
  }
}

export const noteFoulsController = new NoteFoulsController()

// export const noteFoulsController = Router()

// noteFoulsController.get('/get-all', async (req: Request, res: Response) => {
//   try {
//     const noteFouls = await noteFoulsService.getNoteFouls()

//     return res.json(noteFouls)
//   } catch (error) {
//     console.error(error)
//     return res.status(404).json({ error })
//   }
// })

// noteFoulsController.get('/get', async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.query
//     let noteFouls: INoteFouls | undefined

//     if (studentId) {
//       noteFouls = await noteFoulsService.getNoteFoulsByStudentId(Number(studentId))
//     }
//     return res.json(noteFouls)
//   } catch (error) {
//     console.error()
//     return res.status(404).json({ error })
//   }
// })

// // noteFoulsController.post('/', async (req: Request, res: Response) => {
//   try {
//     const noteFouls: Omit<INoteFouls, 'id'> = req.body

//     const createNoteFouls = await noteFoulsService.createNoteFouls(noteFouls)

//     return res.json(createNoteFouls)
//   } catch (error) {
//     console.error(error)
//     return res.status(404).json({ error })
//   }
// })
