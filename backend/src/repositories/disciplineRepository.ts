import { disciplineTable } from '../database/common/disciplineTable'
import { IDiscipline } from '../domain/interfaces/entities/IDiscipline'
import { AbstractRepository } from './AbstractRepository'

export class DisciplineRepository extends AbstractRepository<IDiscipline> {
  protected readonly table = disciplineTable

  getAllDisciplineWithTypeAndWorkload = async (): Promise<DisciplineFilterDTO[]>
}

select d.id ,d."name" as discipline ,td."name" as "type", d.workload from discipline d
inner join type_discipline td  on td.id = d."typeDiscipline";
