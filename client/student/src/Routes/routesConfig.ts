import { faBook, faDesktop, faPaste } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import RoutesConfig from 'bootstrap-based-components/dist/@types/RoutesConfig'
import Login from '../pages/Login'
import CourseManagement from '../pages/CourseManagement'
import Registry from '../pages/Registry'
import AcademicCalendar from '../pages/AcademicCalendar'
import ControlPanel from '../pages/ControlPanel'

const routesConfig: RoutesConfig = {
  login: {
    path: 'login',
    name: 'Login',
    page: Login,
    hideOnSideMenu: true
  },

  courseManagement: {
    path: 'courseManagement',
    name: 'Gerência de cursos',
    page: CourseManagement,
    icon: faBook
  },

  academicCalendar: {
    path: 'academicCalendar',
    name: 'Ano letivo',
    page: AcademicCalendar,
    icon: faCalendar
  },

  registry: {
    path: 'registry',
    name: 'Matrículas',
    page: Registry,
    icon: faPaste
  },

  controlPanel: {
    path: 'controlPanel',
    name: 'Painel de controle',
    page: ControlPanel,
    icon: faDesktop
  }
}

export default routesConfig
