import Knex from 'knex'
import { development } from './knexfile'

export const knex = Knex(development)
