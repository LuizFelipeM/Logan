import { faBook, faDesktop, faPaste } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import RoutesConfig from 'bootstrap-based-components/dist/@types/RoutesConfig'
import Login from '../pages/Login'
import CourseManagement from '../pages/CourseManagement'
import Registry from '../pages/Registry'
import ControlPanel from '../pages/ControlPanel'
import PasswordRecovery from '../pages/PasswordRecovery'
import RoutesEnum from './routesEnum'
import DisciplineDetails from '../pages/CourseManagement/DisciplineDetails'
import ClassDetails from '../pages/CourseManagement/ClassDetails'
import DisciplineClassRegister from '../pages/CourseManagement/DisciplineClassRegister'
import AccountControl from '../pages/ControlPanel/AccountControl'
import UsersPermissions from '../pages/ControlPanel/UsersPermissions'
import CourseInstitution from '../pages/ControlPanel/CourseInstitution'
import AcademicCalendar from '../pages/AcademicCalendar'

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

  courseManagementClassDetails: {
    hideOnSideMenu: true,
    path: 'courseManagement/class/:id',
    name: 'Gerência de cursos',
    page: ClassDetails
  },

  courseManagementDisciplineDetails: {
    hideOnSideMenu: true,
    path: 'courseManagement/discipline/:id',
    name: 'Gerência de cursos',
    page: DisciplineDetails
  },

  courseManagementRegister: {
    hideOnSideMenu: true,
    path: 'courseManagement/register',
    name: 'Gerência de cursos',
    page: DisciplineClassRegister
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
  },

  controlPanelAccountControl: {
    hideOnSideMenu: true,
    path: 'controlPanel/accountControl',
    name: 'Gerência de contas',
    page: AccountControl
  },

  controlPanelCourseInstitution: {
    hideOnSideMenu: true,
    path: 'controlPanel/courseInstitution',
    name: 'Curso e Instituição de ensino',
    page: CourseInstitution
  },

  controlPanelUserPermissions: {
    hideOnSideMenu: true,
    path: 'controlPanel/userPermissions',
    name: 'Permissões de usuários',
    page: UsersPermissions
  }
}

export default routesConfig
