import * as Knex from 'knex'

import { profilesTableName } from '../../common/profilesTable'
import { registryTableName } from '../../common/registryTable'
import { rulesTableName } from '../../common/rulesTable'
import { statusRegistryTableName } from '../../common/statusRegistryTable'
import { typeDisciplineTableName } from '../../common/typeDisciplineTable'
import { usersTableName } from '../../common/usersTable'

export async function seed (knex: Knex): Promise<void> {
  await users(knex)
  await profiles(knex)
  await rules(knex)
  const type = await typeDiscipline(knex)
  const status = await statusRegistry(knex)
  await registry(knex, status)
}
async function users (knex: Knex): Promise<void> {
  await knex(usersTableName).del()

  await knex(usersTableName).insert([
    {
      firstName: 'Lucas',
      lastName: 'Daniel',
      gender: 'Male',
      birthDate: '17/11/1999'
    },
    {
      firstName: 'Pedro',
      lastName: 'Henrique',
      gender: 'Male',
      birthDate: '25/09/1999'
    },
    {
      firstName: 'Luiz',
      lastName: 'Felipe',
      gender: 'Male',
      birthDate: '11/09/1999'
    }
  ])
}

async function profiles (knex:Knex): Promise<void> {
  await knex(profilesTableName).del()

  await knex(profilesTableName).insert([
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

  ])
}

async function rules (knex:Knex): Promise<void> {
  await knex(rulesTableName).del()

  await knex(rulesTableName).insert([
    {
      name: 'Acesso Total',
      description: 'Tem acesso a todas as funcionabilidades do programa'
    },
    {
      name: 'Acesso de Aluno',
      description: 'Tem acesso as suas informações de cadastro, histórico, matérias e notas'
    }
  ])
}

async function typeDiscipline (knex:Knex): Promise<number[]> {
  await knex(typeDisciplineTableName).del()

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
  await knex(statusRegistryTableName).del()

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

async function registry (knex:Knex, status: number[]): Promise<void> {
  await knex(registryTableName).del()

  await knex(registryTableName).insert([
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
  ])
}
