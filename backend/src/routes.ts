import { Router } from 'express'
import { secureRoute } from './common/secureRoute'
import { classController } from './controllers/classesController'
import { disciplineController } from './controllers/disciplineController'
import { calendarController } from './controllers/calendarController'
import { campusController } from './controllers/campusController'
import { noteFoulsController } from './controllers/noteFoulsController'
import { userController } from './controllers/userController'
import { profileController } from './controllers/profileController'
import { studentController } from './controllers/studentController'
import { courseController } from './controllers/coursesController'
export const routes = Router()

routes.use('/user', secureRoute(1, 2), userController.router)
routes.use('/profile', secureRoute(1, 2), profileController.router)
routes.use('/student', studentController.router)
routes.use('/class', classController)
routes.use('/noteFouls', noteFoulsController)
routes.use('/discipline', disciplineController)
routes.use('/calendar', calendarController)
routes.use('/campus', campusController)
routes.use('/course', courseController.router)
