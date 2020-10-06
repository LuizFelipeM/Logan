import { IClassStudentCountDto } from '../contracts/IClassStudentCountDto'
import { ICourseDto } from '../contracts/ICourseDto'
import { IStudentCountByClassDto } from '../contracts/IStudentCountByClassDto'
import { IClass } from '../interfaces/entities/IClass'

export function toClassesDto (data: IClass, course: ICourseDto | undefined, student: IStudentCountByClassDto | undefined): IClassStudentCountDto {
  return {
    id: data.id,
    course: course?.name,
    students: student?.count
  }
}
