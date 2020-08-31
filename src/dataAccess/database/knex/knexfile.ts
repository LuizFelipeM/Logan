import { Config } from 'knex'
import { toInteger } from 'lodash'
import { join } from 'path'
import { config } from 'dotenv'

const path = join(__dirname, '..', '..', '..', '..', '.env')
config({ path })

export const development: Config = {
  client: 'postgresql',
  connection: {
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DATABASE,
    port: toInteger(process.env.DEV_DB_PORT)
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
