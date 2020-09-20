import 'reflect-metadata'

import { Router } from 'express'
import { secureRoute } from './common/secureRoute'
import { classController } from './controllers/classesController'
import { disciplineController } from './controllers/disciplineController'
import { calendarController } from './controllers/calendarController'
import { campusController } from './controllers/campusController'
import { noteFoulsController } from './controllers/noteFoulsController'
import { courseController } from './controllers/courseController'

import { DIContainer } from './DIContainer'
import { UserController } from './controllers/userController'
import { StudentController } from './controllers/studentController'
import { ProfileController } from './controllers/profileController'

export const routes = Router()

const userController = DIContainer.resolve<UserController>(UserController)
const profileController = DIContainer.resolve<ProfileController>(ProfileController)
const studentController = DIContainer.resolve<StudentController>(StudentController)

routes.use('/user', secureRoute(1, 2), userController.router)
routes.use('/profile', secureRoute(1, 2), profileController.router)
routes.use('/student', studentController.router)
routes.use('/class', classController)
routes.use('/noteFouls', noteFoulsController)
routes.use('/course', courseController)
routes.use('/discipline', disciplineController)
routes.use('/calendar', calendarController)
routes.use('/campus', campusController)
