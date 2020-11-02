import { faBook, faDesktop, faPaste } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import RoutesConfig from 'bootstrap-based-components/dist/@types/RoutesConfig'
import Login from '../pages/Login'
import CourseManagement from '../pages/CourseManagement'
import Registry from '../pages/Registry'
import AcademicCalendar from '../pages/AcademicCalendar'
import ControlPanel from '../pages/ControlPanel'
import PasswordRecovery from '../pages/PasswordRecovery'
import RoutesEnum from './routesEnum'
import DisciplineDetails from '../pages/CourseManagement/DisciplineDetails'

const routesConfig: RoutesConfig<RoutesEnum> = {
  login: {
    exact: true,
    path: 'login',
    name: 'Login',
    page: Login,
    hideSideMenu: true,
    hideOnSideMenu: true
  },

  passwordRecovery: {
    path: 'passwordRecovery',
    name: 'Troca de senha',
    page: PasswordRecovery,
    hideSideMenu: true,
    hideOnSideMenu: true
  },

  courseManagement: {
    path: 'courseManagement',
    name: 'Gerência de cursos',
    page: CourseManagement,
    icon: faBook
  },

  courseManagementEdit: {
    hideOnSideMenu: true,
    path: 'courseManagement/discipline/:id',
    name: 'Gerência de cursos',
    page: DisciplineDetails
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
