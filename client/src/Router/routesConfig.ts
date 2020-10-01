import { RouterEnum } from "./routerEnum"

import Login from "../pages/Login"
import CourseManagement from "../pages/CourseManagement"
import Registry from "../pages/Registry"
import AcademicCalendar from "../pages/AcademicCalendar"

interface RouteProp {
  path: string
  name: string
  page: React.FC<any>
}

type RoutesConfig = Record<RouterEnum, RouteProp>

export const routesConfig: RoutesConfig = {
  login: {
    path: '/login',
    name: 'Login',
    page: Login
  },

  courseManagement: {
    path: '/courseManagement',
    name: 'Gerencia de curso',
    page: CourseManagement
  },

  registry: {
    path: '/registry',
    name: 'Matrícula',
    page: Registry
  },

  academicCalendar: {
    path: '/academicCalendar',
    name: 'Calendário acadêmico',
    page: AcademicCalendar
  }
}
