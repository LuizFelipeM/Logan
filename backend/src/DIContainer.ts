import { Container } from 'inversify'
import { ClasseRepository } from './repositories/classesRepository'
import { CoursesRepository } from './repositories/coursesRepository'
import { NoteFoulsRepository } from './repositories/NoteFoulsRepository'
import { ProfileRepository } from './repositories/ProfileRepository'
import { RuleRepository } from './repositories/RuleRepository'
import { StudentsRepository } from './repositories/StudentRepository'
import { UserRepository } from './repositories/UserRepository'
import { ClassesService } from './services/classesService'
import { CourseService } from './services/coursesService'
import { ProfileService } from './services/ProfileService'
import { RuleService } from './services/RuleService'
import { StudentService } from './services/StudentService'
import { UserService } from './services/UserService'
import { CampusRepository } from './repositories/CampusRepository'
import { CampusService } from './services/CampusService'
import { DisciplineRepository } from './repositories/DisciplineRepository'
import { NoteFoulsService } from './services/NoteFoulsService'
import { DisciplineService } from './services/DisciplineService'
import { CalendarRepository } from './repositories/CalendarRepository'
import { CalendarService } from './services/CalendarService'

export const DIContainer = new Container()

/**
 * Container REPOSITORIES configuration binding
 */
DIContainer.bind<UserRepository>(UserRepository).toSelf()
DIContainer.bind<RuleRepository>(RuleRepository).toSelf()
DIContainer.bind<ProfileRepository>(ProfileRepository).toSelf()
DIContainer.bind<StudentsRepository>(StudentsRepository).toSelf()
DIContainer.bind<CoursesRepository>(CoursesRepository).toSelf()
DIContainer.bind<ClasseRepository>(ClasseRepository).toSelf()
DIContainer.bind<NoteFoulsRepository>(NoteFoulsRepository).toSelf()
DIContainer.bind<DisciplineRepository>(DisciplineRepository).toSelf()
DIContainer.bind<CampusRepository>(CampusRepository).toSelf()
DIContainer.bind<CalendarRepository>(CalendarRepository).toSelf()

/**
 * Container SERVICES configuration binding
 */
DIContainer.bind<StudentService>(StudentService).toSelf()
DIContainer.bind<ProfileService>(ProfileService).toSelf()
DIContainer.bind<RuleService>(RuleService).toSelf()
DIContainer.bind<UserService>(UserService).toSelf()
DIContainer.bind<CourseService>(CourseService).toSelf()
DIContainer.bind<ClassesService>(ClassesService).toSelf()
DIContainer.bind<NoteFoulsService>(NoteFoulsService).toSelf()
DIContainer.bind<DisciplineService>(DisciplineService).toSelf()
DIContainer.bind<CampusService>(CampusService).toSelf()
DIContainer.bind<CalendarService>(CalendarService).toSelf()
