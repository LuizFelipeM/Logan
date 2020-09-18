import { Router } from 'express'
import { userController } from './controllers/userController'
import { profileController } from './controllers/profileController'
import { secureRoute } from './common/secureRoute'
import { studentController } from './controllers/studentController'

export const routes = Router()

routes.use('/user', secureRoute(1, 2), userController.router)
routes.use('/profile', secureRoute(1, 2), profileController.router)
routes.use('/student', studentController.router)
