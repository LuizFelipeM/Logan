import { Router } from 'express'
import { userController } from './controllers/userController'
import { profileController } from './controllers/profileController'

export const routes = Router()

routes.use('/user', userController)
routes.use('/profile', profileController)
