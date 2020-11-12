import { ITypeDisciplineAndWorkloadDto } from '../interfaces/contracts/ITypeDisciplineAndWorkloadDto'
import { IDiscipline } from '../interfaces/entities/IDiscipline'
import { ITypeDiscipline } from '../interfaces/entities/ITypeDicipline'

export function toTypeDisciplineAndWorkload (data: IDiscipline, typeDiscipline: ITypeDiscipline | undefined): ITypeDisciplineAndWorkloadDto {
  return {
    id: data.id,
    discipline_type: typeDiscipline?.name,
    discipline_name: data.name,
    workload: data.workload
  }
}
