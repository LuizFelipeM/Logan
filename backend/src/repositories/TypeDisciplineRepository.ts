import { typeDisciplineTable } from '../database/common/typeDisciplineTable'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { AbstractRepository } from './AbstractRepository'

export class TypeDisciplineRepository extends AbstractRepository<ITypeDiscipline> {
    protected readonly table = typeDisciplineTable
}
