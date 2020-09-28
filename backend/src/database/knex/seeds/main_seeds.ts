import * as Knex from 'knex'
import { profilesTableName } from '../../common/profilesTable'
import { usersTableName } from '../../common/usersTable'

export async function seed (knex: Knex): Promise<void> {
  await users(knex)
  await profiles(knex)
}
async function users (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(usersTableName).del()

  // Inserts seed entries
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
