import { classesTableName } from '../database/common/classesTable'
import { disciplineTableName } from '../database/common/disciplineTable'
import { professorTable } from '../database/common/professorTable'
import { subjectsTableName } from '../database/common/subjectTable'
import { usersTableName } from '../database/common/usersTable'
import { knex } from '../database/knex/dbConnection'
import { IProfessor } from '../domain/interfaces/entities/IProfessor'
import { AbstractRepository } from './AbstractRepository'

export class ProfessorRepository extends AbstractRepository<IProfessor> {
    protected readonly table = professorTable

    getProfessorsDisciplinesAndClasses = async (): Promise<{firstName:string, disciplineName:string, classId:number}[]> => await knex(professorTable)
      .innerJoin(`${usersTableName} as u`, 'u.id', 't1.user')
      .innerJoin(`${subjectsTableName} as s`, 't1.id', 's.professor')
      .innerJoin(`${classesTableName} as c`, 'c.id', 's.classes')
      .innerJoin(`${disciplineTableName} as d`, 'd.id', 's.discipline')
      .select(
        'u.firstName',
        'd.name as disciplineName',
        'c.id as classId'
      )
      .groupBy('u.firstName', 'd.name', 'c.id')
}
