import { professorTable } from '../database/common/professorTable'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { AbstractRepository } from './AbstractRepository'

export class ProfessorRepository extends AbstractRepository<IProfessor> {
    protected readonly table = professorTable
}
