import { ISpecificCourseDto } from '../interfaces/contracts/ISpecificCourseDto'
import { IClass } from '../interfaces/entities/IClass'
import { IProfessor } from '../interfaces/entities/IProfessor'
import { ISemester } from '../interfaces/entities/ISemester'

export function toSpecificCouse (data: IClass, semester: ISemester, professor: IProfessor): ISpecificCourseDto {
  return {
    class: data.id,
    semester: semester.id,
    professor: professor.user
  }
}
