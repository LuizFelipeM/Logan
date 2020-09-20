import { Container } from 'inversify'
import { ProfileRepository } from './repositories/profileRepository'
import { RuleRepository } from './repositories/ruleRepository'
import { StudentsRepository } from './repositories/studentRepository'
import { UserRepository } from './repositories/userRepository'
import { ProfileService } from './services/profileService'
import { RulesService } from './services/ruleService'
import { StudentService } from './services/studentService'
import { UserService } from './services/userService'

export const DIContainer = new Container()

/**
 * Container REPOSITORIES configuration binding
 */
DIContainer.bind<UserRepository>(UserRepository).toSelf()
DIContainer.bind<RuleRepository>(RuleRepository).toSelf()
DIContainer.bind<ProfileRepository>(ProfileRepository).toSelf()
DIContainer.bind<StudentsRepository>(StudentsRepository).toSelf()

/**
 * Container SERVICES configuration binding
 */
DIContainer.bind<StudentService>(StudentService).toSelf()
DIContainer.bind<ProfileService>(ProfileService).toSelf()
DIContainer.bind<RulesService>(RulesService).toSelf()
DIContainer.bind<UserService>(UserService).toSelf()
