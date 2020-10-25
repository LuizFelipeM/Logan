import Knex from 'knex'
import { development } from './knexfile'

export const knex = <T, R = T>(): Knex<T, R> => Knex(development)
