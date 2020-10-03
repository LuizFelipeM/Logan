import { campusTableName } from '../../database/common/campusTable'
import { DisicplineDto } from '../interfaces/contracts/DisciplineDto'
import { ITypeDisciplineDto } from '../interfaces/contracts/ITypeDiciplineDto'
import { ICourse } from '../interfaces/entities/ICourse'
import { IDiscipline } from '../interfaces/entities/IDiscipline'
import { ITypeDiscipline } from '../interfaces/entities/ITypeDicipline'

// export function toDisciplineDto<T extends IDiscipline> (data: T, typeDiscipline: ITypeDisciplineDto, course: ICourseDto): IDisciplineDto {
//   return {
//     id: data.id,
//     course: course,
//     typeDiscipline,
//     name: data.name,
//     workload: data.workload
//   }
// }

// export function toDisciplineDto (data: IDiscipline, typeDiscipline: ITypeDisciplineDto | undefined): DisicplineDto {
//   return {
//     id: data.id,
//     typeDiscipline,
//     name: data.name,
//     workload: data.workload
//   }
// }

export function toDisciplineDto (data: IDiscipline, typeDiscipline: ITypeDiscipline | undefined): DisicplineDto {
  console.log(typeDiscipline)
  return {
    id: data.id,
    typeName: typeDiscipline?.name,
    name: data.name,
    workload: data.workload
  }
}
