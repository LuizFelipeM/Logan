import { typeDisciplineTable } from '../database/common/typeDisciplineTable'
import { knex } from '../database/knex/dbConnection'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { AbstractRepository } from './AbstractRepository'

export class TypeDisciplineRepository extends AbstractRepository<ITypeDiscipline> {
    protected readonly table = typeDisciplineTable

    getName = async () : Promise<ITypeDiscipline[]> => knex(this.table)
      .select('name')
}
