import * as Knex from 'knex'

import { calendarTableName } from '../../common/calendarTable'
import { campusTableName } from '../../common/campusTable'
import { classesTableName } from '../../common/classesTable'
import { coursesTableName } from '../../common/coursesTable'
import { currentSemesterTableName } from '../../common/currentSemesterTable'
import { disciplineTableName } from '../../common/disciplineTable'
import { noteFoulsTableName } from '../../common/noteFoulsTable'
import { professorTableName } from '../../common/professorTable'
import { profilesTableName } from '../../common/profilesTable'
import { registryTableName } from '../../common/registryTable'
import { rulesInProfilesTableName } from '../../common/rulesInProfilesTable'
import { rulesTableName } from '../../common/rulesTable'
import { statusRegistryTableName } from '../../common/statusRegistryTable'
import { studentsTableName } from '../../common/studentsTable'
import { subjectsTableName } from '../../common/subjectTable'
import { typeDisciplineTableName } from '../../common/typeDisciplineTable'
import { usersTableName } from '../../common/usersTable'

export async function seed (knex: Knex): Promise<void> {
  await delAll(knex)
  const rul = await rules(knex)
  const profi = await profiles(knex)
  const status = await statusRegistry(knex)
  const type = await typeDiscipline(knex)
  const calen = await calendar(knex)
  const camId = await campus(knex)

  const user = await users(knex, profi)
  const ra = await registry(knex, status)
  const courId = await courses(knex, camId)
  const clas = await classes(knex, courId)
  const profe = await professor(knex, user)

  const disId = await discipline(knex, courId, type)
  const semester = await currentSemester(knex, disId, calen)
  await subject(knex, profe, disId, clas)
  await rulesInProfile(knex, rul, profi)
  const studen = await students(knex, user, ra, courId, clas)
  await noteFouls(knex, studen, disId, semester)
}
async function delAll (knex:Knex): Promise<void> {
  await knex(noteFoulsTableName).del()
  await knex(studentsTableName).del()
  await knex(rulesInProfilesTableName).del()
  await knex(subjectsTableName).del()
  await knex(currentSemesterTableName).del()
  await knex(disciplineTableName).del()

  await knex(professorTableName).del()
  await knex(classesTableName).del()
  await knex(coursesTableName).del()
  await knex(registryTableName).del()
  await knex(usersTableName).del()

  await knex(campusTableName).del()
  await knex(calendarTableName).del()
  await knex(typeDisciplineTableName).del()
  await knex(statusRegistryTableName).del()
  await knex(profilesTableName).del()
  await knex(rulesTableName).del()
}
async function users (knex: Knex, profi:number[]): Promise<number[]> {
  const id = await knex(usersTableName).insert([
    {
      firstName: 'Lucas',
      lastName: 'Daniel',
      gender: 'Male',
      birthDate: '17/11/1999',
      profile: profi[2]
    },
    {
      firstName: 'Pedro',
      lastName: 'Henrique',
      gender: 'Male',
      birthDate: '25/09/1999',
      profile: profi[2]
    },
    {
      firstName: 'Luiz',
      lastName: 'Felipe',
      gender: 'Male',
      birthDate: '11/09/1999',
      profile: profi[2]
    },
    {
      firstName: 'Maria',
      lastName: 'Da Siva',
      gender: 'Female',
      birthDate: '10/04/1999',
      profile: profi[1]
    }
  ]).returning('id')
  return id
}

async function profiles (knex:Knex): Promise<number[]> {
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

async function rules (knex:Knex): Promise<number[]> {
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

async function typeDiscipline (knex:Knex): Promise<number[]> {
  const id = await knex(typeDisciplineTableName).insert([
    {
      name: 'EAD'
    },
    {
      name: 'Presencial'
    }
  ]).returning('id')
  return id
}

async function statusRegistry (knex:Knex): Promise<number[]> {
  const ids = await knex(statusRegistryTableName).insert([
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

async function registry (knex:Knex, status: number[]): Promise<number[]> {
  const id = await knex(registryTableName).insert([
    {
      startRegistry: new Date(2014, 2, 3).toISOString(),
      endEstimate: new Date(2017, 12, 15).toISOString(),
      periodStudy: 'Noturno',
      familiarIncome: 8000,
      originInstitution: 'Bacelar',
      status: status[0]
    },
    {
      startRegistry: new Date(2017, 2, 14).toISOString(),
      endEstimate: new Date(2021, 12, 20).toISOString(),
      periodStudy: 'Vespertino',
      familiarIncome: 3500.15,
      originInstitution: 'Anchieta',
      status: status[2]
    },
    {
      startRegistry: new Date(2011, 2, 3).toISOString(),
      endEstimate: new Date(2015, 11, 28).toISOString(),
      periodStudy: 'Matutino',
      familiarIncome: 1968.44,
      originInstitution: 'Bacelar',
      status: status[1]
    }
  ]).returning('id')
  return id
}

async function campus (knex:Knex):Promise<number[]> {
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

async function courses (knex:Knex, campus:number[]): Promise<number[]> {
  const id = await knex(coursesTableName).insert([
    {
      campus: campus[0],
      totalSemester: 6,
      name: 'Fisica'
    },
    {
      campus: campus[2],
      totalSemester: 10,
      name: 'Eng. da Computação'
    },
    {
      campus: campus[1],
      totalSemester: 4,
      name: 'Artes'
    }
  ]).returning('id')

  return id
}

async function calendar (knex:Knex): Promise<number[]> {
  const id = await knex(calendarTableName).insert([
    {
      startAcademicYear: new Date(2014, 2, 3).toISOString(),
      academicYearEnd: new Date(2014, 12, 10).toISOString(),
      startNotesP1: new Date(2014, 4, 10).toISOString(),
      finalNotesP1: new Date(2014, 4, 20).toISOString(),
      startNotesP2: new Date(2014, 5, 11).toISOString(),
      finalNotesP2: new Date(2014, 5, 22).toISOString(),
      startNotesSub: new Date(2014, 6, 15).toISOString(),
      finalNotesSub: new Date(2014, 6, 20).toISOString(),
      startNotesExam: new Date(2014, 6, 22).toISOString(),
      finalNotesExam: new Date(2014, 6, 27).toISOString()
    }
  ]).returning('id')
  return id
}

async function discipline (knex:Knex, courses: number[], typeDis: number[]): Promise<number[]> {
  const id = await knex(disciplineTableName).insert([
    {
      courses: courses[0],
      typeDiscipline: typeDis[0],
      name: 'Fisica I',
      workload: 50
    },
    {
      courses: courses[2],
      typeDiscipline: typeDis[1],
      name: 'Isometria',
      workload: 120
    },
    {
      courses: courses[2],
      typeDiscipline: typeDis[1],
      name: 'Calculo',
      workload: 150
    }
  ]).returning('id')
  return id
}

async function rulesInProfile (knex:Knex, rul: number[], profi: number[]): Promise<void> {
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

async function currentSemester (knex: Knex, disId: number[], calen:number[]): Promise<number[]> {
  const id = await knex(currentSemesterTableName).insert([
    {
      discipline: disId[0],
      calendar: calen[0],
      evalP1Start: new Date(2014, 4, 10).toISOString(),
      evalP1End: new Date(2014, 4, 20).toISOString(),
      evalP2Start: new Date(2014, 5, 11).toISOString(),
      evalP2End: new Date(2014, 5, 22).toISOString(),
      evalSubStart: new Date(2014, 6, 15).toISOString(),
      evalSubEnd: new Date(2014, 6, 20).toISOString(),
      evalExamStart: new Date(2014, 6, 22).toISOString(),
      evalExamEnd: new Date(2014, 6, 27).toISOString()
    }
  ]).returning('id')
  return id
}

async function classes (knex:Knex, cour:number[]): Promise<number[]> {
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

async function students (knex:Knex, user:number[], ra:number[], cour: number[], clas:number[]): Promise<number[]> {
  const id = await knex(studentsTableName).insert([
    {
      user: user[0],
      ra: ra[1],
      course: cour[1],
      class: clas[1]
    },
    {
      user: user[2],
      ra: ra[0],
      course: cour[2],
      class: clas[1]
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

async function professor (knex:Knex, user:number[]): Promise<number[]> {
  const id = await knex(professorTableName).insert([
    {
      user: user[3]
    }
  ]).returning('id')
  return id
}

async function subject (knex:Knex, profes:number[], disId:number[], clas:number[]): Promise<void> {
  await knex(subjectsTableName).insert([
    {
      professor: profes[0],
      discipline: disId[1],
      classes: clas[2]
    }
  ])
}

async function noteFouls (knex:Knex, studen:number[], disId:number[], semes:number[]): Promise<void> {
  await knex(noteFoulsTableName).insert([
    {
      students: studen[1],
      discipline: disId[2],
      semester: semes[0],

      noteP1: 5.00,
      noteP2: 7.00,
      noteSub: 0,
      noteExam: 8.00,
      finalNote: 7.00,
      fouls: 4
    },
    {
      students: studen[0],
      discipline: disId[2],
      semester: semes[0],

      noteP1: 7.00,
      noteP2: 7.00,
      noteSub: 0,
      noteExam: 0,
      finalNote: 7.00,
      fouls: 1
    },
    {
      students: studen[2],
      discipline: disId[2],
      semester: semes[0],

      noteP1: 8.00,
      noteP2: 6.50,
      noteSub: 0,
      noteExam: 0,
      finalNote: 7.00,
      fouls: 7
    }
  ])
}
