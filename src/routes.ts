import { Router } from 'express'
import { userController } from './controllers/userController'

export const routes = Router()

routes.use('/user', userController)
