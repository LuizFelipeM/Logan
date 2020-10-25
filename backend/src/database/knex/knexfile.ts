import { Config } from 'knex'
import { join } from 'path'
import { config } from 'dotenv'

const path = join(__dirname, '..', '..', '..', '.env')
config({ path })

export const development: Config = {
  client: 'postgresql',
  searchPath: 'public',
  connection: {
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DATABASE,
    port: process.env.DEV_DB_PORT ? parseInt(process.env.DEV_DB_PORT) : 5432
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
