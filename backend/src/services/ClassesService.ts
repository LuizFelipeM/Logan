import { inject } from 'inversify'
import { IClassStudentCountDto } from '../domain/contracts/IClassStudentCountDto'
import { IClassMinifyViewDto } from '../domain/interfaces/contracts/IClassMinifyViewDto'
import { IClass } from '../domain/interfaces/entities/IClass'
import { toClassesDto } from '../domain/mappers/classesMapper'
import { ClassesRepository } from '../repositories/ClassesRepository'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { StudentsRepository } from '../repositories/StudentRepository'
import { AbstractService } from './AbstractService'

export class ClassesService extends AbstractService<IClass, ClassesRepository> {
  constructor (
    @inject(ClassesRepository)
    protected readonly classesRepository: ClassesRepository,

    @inject(CoursesRepository)
    protected readonly courseRepository: CoursesRepository,

    @inject(StudentsRepository)
    protected readonly studentRepository: StudentsRepository

  ) { super(classesRepository) }

  getAllClassesMinifiedView = (): Promise<IClassMinifyViewDto[]> => this.classesRepository.selectAllClassesMinifiedView()

  getClassWithCourse = async (): Promise<IClassStudentCountDto[]> => {
    const classes = await this.classesRepository.selectAll()
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
