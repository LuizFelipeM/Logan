import { Config } from 'knex'

export const development: Config = {
  client: 'postgresql',
  connection: {
    user: 'api',
    password: 'api',
    database: 'logan'
  },
  migrations: { directory: './migrations' },
  seeds: { directory: './seeds' }
}

export const staging: Config = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

export const production: Config = {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user: 'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
