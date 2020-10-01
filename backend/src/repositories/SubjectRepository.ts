import { subjectsTable } from '../database/common/subjectTable'
import { ISubject } from '../domain/interfaces/entities/ISubject'
import { AbstractRepository } from './AbstractRepository'

export class SubjectRepository extends AbstractRepository<ISubject> {
    protected readonly table = subjectsTable
}
