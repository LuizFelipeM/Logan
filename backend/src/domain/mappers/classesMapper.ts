import { IClassStudentCountDto } from '../interfaces/contracts/IClassStudentCountDto'
import { IStudentCountByClassDto } from '../interfaces/contracts/IStudentCountByClassDto'
import { IClass } from '../interfaces/entities/IClass'
import { ICourse } from '../interfaces/entities/ICourse'

export function toClassesDto (data: IClass, course: ICourse | undefined, student: IStudentCountByClassDto | undefined): IClassStudentCountDto {
  return {
    id: data.id,
    course: course?.name,
    students: student?.count
  }
}
