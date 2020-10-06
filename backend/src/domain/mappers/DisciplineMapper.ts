import { ITypeAndWorkloadDto } from '../interfaces/contracts/ITypeAndWorkloadDto'
import { IDiscipline } from '../interfaces/entities/IDiscipline'
import { ITypeDiscipline } from '../interfaces/entities/ITypeDicipline'

export function toTypeAndWorkload (data: IDiscipline, typeDiscipline: ITypeDiscipline | undefined): ITypeAndWorkloadDto {
  return {
    id: data.id,
    typeName: typeDiscipline?.name,
    name: data.name,
    workload: data.workload
  }
}
