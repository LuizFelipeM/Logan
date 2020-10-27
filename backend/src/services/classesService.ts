import { inject } from 'inversify'
import { IClassStudentCountDto } from '../domain/contracts/IClassStudentCountDto'
import { IClass } from '../domain/interfaces/entities/IClass'
import { toClassesDto } from '../domain/mappers/classesMapper'
import { ClasseRepository } from '../repositories/classesRepository'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { StudentsRepository } from '../repositories/StudentRepository'
import { AbstractService } from './AbstractService'

export class ClassesService extends AbstractService<IClass, ClasseRepository> {
  constructor (
    @inject(ClasseRepository)
    protected readonly classeRepository: ClasseRepository,

    @inject(CoursesRepository)
    protected readonly courseRepository: CoursesRepository,

    @inject(StudentsRepository)
    protected readonly studentRepository: StudentsRepository

  ) {
    super(classeRepository)
  }

  getClassWithCourse = async (): Promise<IClassStudentCountDto[]> => {
    const classes = await this.classeRepository.selectAll()
    const courses = await this.courseRepository.selectAll()
    const students = await this.studentRepository.countStudentsInClass()

    const getClassCoursesAndStudents = classes.map(clas => {
      const course = courses.find(c => c.id === clas.course)
      const student = students.find(s => s.class === clas.id)
      return toClassesDto(clas, course, student)
    })
    return getClassCoursesAndStudents
  }
}
