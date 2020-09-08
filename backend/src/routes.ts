import { Router } from 'express'
import { userController } from './controllers/userController'
import { studentController } from './controllers/studentController'

export const routes = Router()

routes.use('/user', userController)
routes.use('/student', studentController)
