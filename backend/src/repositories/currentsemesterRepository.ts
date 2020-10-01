import { currentSemesterTable } from '../database/common/currentSemesterTable'
import { ICurrentSemester } from '../domain/interfaces/entities/ICurrentSemester'
import { AbstractRepository } from './AbstractRepository'

export class CurrentsemesterRepository extends AbstractRepository<ICurrentSemester> {
    protected readonly table = currentSemesterTable
}
