import { ICourseDto } from '../interfaces/contracts/ICourseDto'
import { IDisciplineDto } from '../interfaces/contracts/IDiciplineDto'
import { ITypeDisciplineDto } from '../interfaces/contracts/ITypeDiciplineDto'
import { IDiscipline } from '../interfaces/entities/IDiscipline'

export function toDisciplineDto<T extends IDiscipline> (data: T, typeDiscipline: ITypeDisciplineDto, course: ICourseDto): IDisciplineDto {
  return {
    id: data.id,
    course: course,
    typeDiscipline,
    name: data.name,
    workload: data.workload
  }
}
