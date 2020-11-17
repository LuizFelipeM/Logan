import * as Knex from 'knex'

import { calendarsTableName } from '../../common/calendarsTable'
import { campusTableName } from '../../common/campusTable'
import { classesTableName } from '../../common/classesTable'
import { coursesTableName } from '../../common/coursesTable'
import { disciplinesTableName } from '../../common/disciplinesTable'
import { noteFoulsTableName } from '../../common/noteFoulsTable'
import { professorsTableName } from '../../common/professorsTable'
import { profilesTableName } from '../../common/profilesTable'
import { registriesTableName } from '../../common/registriesTable'
import { rulesInProfilesTableName } from '../../common/rulesInProfilesTable'
import { rulesTableName } from '../../common/rulesTable'
import { semestersTableName } from '../../common/semestersTable'
import { registriesStatusTableName } from '../../common/registriesStatusTable'
import { studentsTableName } from '../../common/studentsTable'
import { subjectsTableName } from '../../common/subjectsTable'
import { disciplineTypesTableName } from '../../common/disciplineTypesTable'
import { usersTableName } from '../../common/usersTable'

let knex: Knex

export async function seed (k: Knex): Promise<void> {
  knex = k

  await delAll()

  const rulesIds = await rules()
  const profilesIds = await profiles()
  const registriesStatusIds = await registryStatusIds()
  const disciplineTypesIds = await disciplineTypes()
  const calendarsIds = await calendars()
  const campusIds = await campus()

  const usersIds = await users(profilesIds)
  const regiriesIds = await registries(registriesStatusIds)
  const coursesIds = await courses(campusIds)
  const classesIds = await classes(coursesIds)
  const professorsIds = await professor(usersIds)

  const semestersIds = await semesters(calendarsIds, coursesIds)
  const disciplinesIds = await disciplines(coursesIds, disciplineTypesIds)
  await subjects(professorsIds, disciplinesIds, classesIds, semestersIds)
  await rulesInProfile(rulesIds, profilesIds)
  const studentsIds = await students(usersIds, regiriesIds, coursesIds, classesIds)
  await noteFouls(studentsIds, disciplinesIds)
}

async function delAll (): Promise<void> {
  await knex(noteFoulsTableName).del()
  await knex(studentsTableName).del()
  await knex(rulesInProfilesTableName).del()
  await knex(subjectsTableName).del()
  await knex(semestersTableName).del()
  await knex(disciplinesTableName).del()

  await knex(professorsTableName).del()
  await knex(classesTableName).del()
  await knex(coursesTableName).del()
  await knex(registriesTableName).del()
  await knex(usersTableName).del()

  await knex(campusTableName).del()
  await knex(calendarsTableName).del()
  await knex(disciplineTypesTableName).del()
  await knex(registriesStatusTableName).del()
  await knex(profilesTableName).del()
  await knex(rulesTableName).del()
}

async function users (profi:number[]): Promise<number[]> {
  const id = await knex(usersTableName).insert([
    {
      first_name: 'Lucas',
      last_name: 'Daniel',
      gender: 'Male',
      birth_date: '17/11/1999',
      profile: profi[2]

    },
    {
      first_name: 'Pedro',
      last_name: 'Henrique',
      gender: 'Male',
      birth_date: '25/09/1999',
      profile: profi[2]

    },
    {
      first_name: 'Luiz',
      last_name: 'Felipe',
      gender: 'Male',
      birth_date: '11/09/1999',
      profile: profi[2]

    },
    {
      first_name: 'Maria',
      last_name: 'Da Siva',
      gender: 'Female',
      birth_date: '10/04/1999',
      profile: profi[1]
    },
    {
      first_name: 'Ricardo',
      last_name: 'Moreira',
      gender: 'Male',
      birth_date: '10/04/1970',
      profile: profi[1]
    },
    {
      first_name: 'Roberto',
      last_name: 'Justus',
      gender: 'Indefinido',
      birth_date: '10/04/1968',
      profile: profi[1]
    }
  ]).returning('id')
  return id
}

async function profiles (): Promise<number[]> {
  const id = await knex(profilesTableName).insert([
    {
      name: 'Coordenador'
    },
    {
      name: 'Professor'
    },
    {
      name: 'Master'
    },
    {
      name: 'Aluno'
    }

  ]).returning('id')
  return id
}

async function rules (): Promise<number[]> {
  const id = await knex(rulesTableName).insert([
    {
      name: 'Acesso Total',
      description: 'Tem acesso a todas as funcionabilidades do programa'
    },
    {
      name: 'Acesso de Aluno',
      description: 'Tem acesso as suas informações de cadastro, histórico, matérias e notas'
    }
  ]).returning('id')
  return id
}

async function disciplineTypes (): Promise<number[]> {
  const id = await knex(disciplineTypesTableName).insert([
    {
      name: 'EAD'
    },
    {
      name: 'Presencial'
    }
  ]).returning('id')
  return id
}

async function registryStatusIds (): Promise<number[]> {
  const ids = await knex(registriesStatusTableName).insert([
    {
      name: 'Ativado'
    },
    {
      name: 'Trancado'
    },
    {
      name: 'Desativado'
    }
  ]).returning('id')
  return ids
}

async function registries (status: number[]): Promise<number[]> {
  const id = await knex(registriesTableName).insert([
    {
      start_registry: new Date(2018, 2, 3).toISOString(),
      end_estimate: new Date(2021, 12, 15).toISOString(),
      period_study: 'Noturno',
      familiar_income: 8000,
      origin_institution: 'Bacelar',
      status: status[0]
    },
    {
      start_registry: new Date(2018, 2, 14).toISOString(),
      end_estimate: new Date(2021, 12, 20).toISOString(),
      period_study: 'Vespertino',
      familiar_income: 3500.15,
      origin_institution: 'Anchieta',
      status: status[2]
    },
    {
      start_registry: new Date(2018, 2, 3).toISOString(),
      end_estimate: new Date(2021, 11, 28).toISOString(),
      period_study: 'Matutino',
      familiar_income: 1968.44,
      origin_institution: 'Bacelar',
      status: status[1]
    }
  ]).returning('id')
  return id
}

async function campus ():Promise<number[]> {
  const id = await knex(campusTableName).insert([
    {
      name: 'Anchieta',
      uf: 'SP'
    },
    {
      name: 'Bacelar',
      uf: 'SP'
    },
    {
      name: 'Jundiaí',
      uf: 'MG'
    }
  ]).returning('id')
  return id
}

async function courses (campus:number[]): Promise<number[]> {
  const id = await knex(coursesTableName).insert([
    {
      campus: campus[0],
      total_semester: 6,
      name: 'Fisica'
    },
    {
      campus: campus[2],
      total_semester: 10,
      name: 'Eng. da Computação'
    },
    {
      campus: campus[1],
      total_semester: 4,
      name: 'Artes'
    }
  ]).returning('id')

  return id
}

async function calendars (): Promise<number[]> {
  const id = await knex(calendarsTableName).insert([
    {
      start_academic_year: new Date(2020, 2, 3).toISOString(),
      academic_year_end: new Date(2020, 12, 10).toISOString(),
      start_notes_p1: new Date(2020, 4, 10).toISOString(),
      final_notes_p1: new Date(2020, 4, 20).toISOString(),
      start_notes_p2: new Date(2020, 5, 11).toISOString(),
      final_notes_p2: new Date(2020, 5, 22).toISOString(),
      start_notes_sub: new Date(2020, 6, 15).toISOString(),
      final_notes_sub: new Date(2020, 6, 20).toISOString(),
      start_notes_exam: new Date(2020, 6, 22).toISOString(),
      final_notes_exam: new Date(2020, 6, 27).toISOString()
    },
    {
      start_academic_year: new Date(2020, 2, 3).toISOString(),
      academic_year_end: new Date(2020, 12, 10).toISOString(),
      start_notes_p1: new Date(2020, 4, 10).toISOString(),
      final_notes_p1: new Date(2020, 4, 20).toISOString(),
      start_notes_p2: new Date(2020, 5, 11).toISOString(),
      final_notes_p2: new Date(2020, 5, 22).toISOString(),
      start_notes_sub: new Date(2020, 6, 15).toISOString(),
      final_notes_sub: new Date(2020, 6, 20).toISOString(),
      start_notes_exam: new Date(2020, 6, 22).toISOString(),
      final_notes_exam: new Date(2020, 6, 27).toISOString()
    }
  ]).returning('id')
  return id
}

async function disciplines (courses: number[], dicilpineTypes: number[]): Promise<number[]> {
  const id = await knex(disciplinesTableName).insert([
    {
      course: courses[0],
      type_discipline: dicilpineTypes[0],
      name: 'Termodinamica',
      workload: 50
    },
    {
      course: courses[2],
      type_discipline: dicilpineTypes[1],
      // semester: semester[1],
      name: 'Caricatura',
      workload: 120
    },
    {
      course: courses[2],
      type_discipline: dicilpineTypes[1],
      // semester: semester[1],
      name: 'Sombreamento',
      workload: 150
    },
    {
      course: courses[1],
      type_discipline: dicilpineTypes[1],
      // semester: semester[2],
      name: 'Mecanica',
      workload: 150
    }
  ]).returning('id')
  return id
}

async function rulesInProfile (rul: number[], profi: number[]): Promise<void> {
  await knex(rulesInProfilesTableName).insert([
    {
      profile: profi[2],
      rule: rul[0]
    },
    {
      profile: profi[3],
      rule: rul[1]
    }
  ])
}

async function semesters (calendars: number[], courses: number[]): Promise<number[]> {
  const id = await knex(semestersTableName).insert([
    {
      course: courses[0],
      calendar: calendars[0],
      semester_course: 1,
      semester_year: 1,
      year: new Date(2020).toISOString(),
      eval_p1_start: new Date(2020, 3, 10).toISOString(),
      eval_p1_end: new Date(2020, 3, 20).toISOString(),
      eval_p2_start: new Date(2020, 5, 11).toISOString(),
      eval_p2_end: new Date(2020, 5, 22).toISOString(),
      eval_sub_start: new Date(2020, 6, 15).toISOString(),
      eval_sub_end: new Date(2020, 6, 20).toISOString(),
      eval_exam_start: new Date(2020, 6, 22).toISOString(),
      eval_exam_end: new Date(2020, 6, 27).toISOString()
    },
    {
      course: courses[2],
      calendar: calendars[1],
      semester_course: 2,
      semester_year: 2,
      year: new Date(2020).toISOString(),
      eval_p1_start: new Date(2020, 8, 10).toISOString(),
      eval_p1_end: new Date(2020, 8, 20).toISOString(),
      eval_p2_start: new Date(2020, 11, 11).toISOString(),
      eval_p2_end: new Date(2020, 11, 22).toISOString(),
      eval_sub_start: new Date(2020, 11, 24).toISOString(),
      eval_sub_end: new Date(2020, 11, 28).toISOString(),
      eval_exam_start: new Date(2020, 12, 7).toISOString(),
      eval_exam_end: new Date(2020, 12, 14).toISOString()
    },
    {
      course: courses[1],
      calendar: calendars[0],
      semester_course: 3,
      semester_year: 1,
      year: new Date(2021).toISOString(),
      eval_p1_start: new Date(2021, 4, 10).toISOString(),
      eval_p1_end: new Date(2021, 4, 20).toISOString(),
      eval_p2_start: new Date(2021, 5, 11).toISOString(),
      eval_p2_end: new Date(2021, 5, 22).toISOString(),
      eval_sub_start: new Date(2021, 6, 15).toISOString(),
      eval_sub_end: new Date(2021, 6, 20).toISOString(),
      eval_exam_start: new Date(2021, 6, 22).toISOString(),
      eval_exam_end: new Date(2021, 6, 27).toISOString()
    }
  ]).returning('id')
  return id
}

async function classes (cour:number[]): Promise<number[]> {
  const id = await knex(classesTableName).insert([
    {
      course: cour[0]
    },
    {
      course: cour[1]
    },
    {
      course: cour[2]
    }
  ]).returning('id')
  return id
}

async function students (user:number[], ra:number[], cour: number[], clas:number[]): Promise<number[]> {
  const id = await knex(studentsTableName).insert([
    {
      user: user[0],
      ra: ra[1],
      course: cour[0],
      class: clas[0]
    },
    {
      user: user[2],
      ra: ra[0],
      course: cour[2],
      class: clas[2]
    },
    {
      user: user[1],
      ra: ra[2],
      course: cour[1],
      class: clas[1]
    }
  ]).returning('id')
  return id
}

async function professor (user:number[]): Promise<number[]> {
  const id = await knex(professorsTableName).insert([
    {
      user: user[3]
    },
    {
      user: user[4]
    },
    {
      user: user[5]
    }
  ]).returning('id')
  return id
}

async function subjects (professorsIds:number[], disciplinesId:number[], classesIds:number[], semestersIds: number[]): Promise<void> {
  await knex(subjectsTableName).insert([
    {
      professor: professorsIds[0],
      discipline: disciplinesId[1],
      class: classesIds[2],
      semester: semestersIds[1],
      class_time: 100
    },
    {
      professor: professorsIds[0],
      discipline: disciplinesId[2],
      class: classesIds[2],
      semester: semestersIds[1],
      class_time: 150
    },
    {
      professor: professorsIds[1],
      discipline: disciplinesId[0],
      class: classesIds[0],
      semester: semestersIds[0],
      class_time: 50
    },
    {
      professor: professorsIds[2],
      discipline: disciplinesId[3],
      class: classesIds[1],
      semester: semestersIds[2],
      class_time: 150
    }
  ])
}

async function noteFouls (studen:number[], disId:number[]): Promise<void> {
  await knex(noteFoulsTableName).insert([
    {
      students: studen[1],
      discipline: disId[1],
      // semester: semes[0],

      note_p1: 5.00,
      note_p2: 7.00,
      note_sub: 0,
      note_exam: 8.00,
      final_note: 7.00,
      fouls: 4
    },
    {
      students: studen[1],
      discipline: disId[2],
      // semester: semes[1],

      note_p1: 6.00,
      note_p2: 2.50,
      note_sub: 3,
      note_exam: 1,
      final_note: 0.00,
      fouls: 18
    },
    {
      students: studen[0],
      discipline: disId[0],
      // semester: semes[2],

      note_p1: 7.00,
      note_p2: 7.00,
      note_sub: 0,
      note_exam: 0,
      final_note: 7.00,
      fouls: 1
    },
    {
      students: studen[2],
      discipline: disId[3],
      // semester: semes[1],

      note_p1: 8.00,
      note_p2: 6.50,
      note_sub: 0,
      note_exam: 0,
      final_note: 7.00,
      fouls: 7
    }
  ])
}
