import * as Knex from 'knex'

import { profilesTableName } from '../../common/profilesTable'
import { usersTableName } from '../../common/usersTable'
import { rulesTableName } from '../../common/rulesTable'
import { typeDisciplineTableName } from '../../common/typeDisciplineTable'
import { statusRegistryTableName } from '../../common/statusRegistryTable'
import { campusTableName } from '../../common/campusTable'
import { registryTableName } from '../../common/registryTable'
import { calendarTableName } from '../../common/calendarTable'
import { coursesTableName } from '../../common/coursesTable'
import { disciplineTableName } from '../../common/disciplineTable'

export async function up (knex: Knex): Promise<void> {
  return knex.schema

    .createTableIfNotExists(profilesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 255).notNullable().unique()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists(usersTableName, function (table) {
      table.increments('id').primary()

      table.string('firstName', 255).notNullable()
      table.string('lastName', 255).notNullable()
      table.string('gender', 50).notNullable()
      table.timestamp('birthDate')

      table.integer('profile')

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('profile').references('id').inTable(profilesTableName)
    })

    .createTableIfNotExists(rulesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 255).notNullable().unique().index()
      table.string('description', 500)

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists(typeDisciplineTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 100)
    })

    .createTableIfNotExists(statusRegistryTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 50).notNullable()
    })

    .createTableIfNotExists(registryTableName, function (table) {
      table.increments('id').primary()

      table.integer('status').notNullable()
      table.timestamp('startRegistry', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('endEstimate', { precision: 6 }).notNullable()
      table.string('periodStudy', 20)
      table.text('observation')
      table.decimal('familiarIncome')
      table.text('originInstitution')

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('status').references('id').inTable(statusRegistryTableName)
    })

    .createTableIfNotExists(campusTableName, function (table) {
      table.increments('id').primary()
      table.string('name', 100)
      table.string('uf', 50)
    })

    .createTableIfNotExists(coursesTableName, function (table) {
      table.increments('id').primary()

      table.integer('campus')
      table.integer('total_semester')
      table.string('name', 50)

      table.foreign('campus').references('id').inTable(campusTableName)
    })

    .createTableIfNotExists(calendarTableName, function (table) {
      table.increments('id').primary()

      table.timestamp('startAcademicYear', { precision: 6 }).notNullable()
      table.timestamp('academicYearEnd', { precision: 6 }).notNullable()

      table.timestamp('startNotesP1', { precision: 6 }).notNullable()
      table.timestamp('finalNotesP1', { precision: 6 }).notNullable()

      table.timestamp('startNotesP2', { precision: 6 }).notNullable()
      table.timestamp('finalNotesP2', { precision: 6 }).notNullable()

      table.timestamp('startNotesSub', { precision: 6 }).notNullable()
      table.timestamp('finalNotesSub', { precision: 6 }).notNullable()

      table.timestamp('startNotesExam', { precision: 6 }).notNullable()
      table.timestamp('finalNotesExam', { precision: 6 }).notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists(disciplineTableName, function (table) {
      table.increments('id').primary()

      table.integer('courses')
      table.integer('typeDiscipline')
      table.string('name', 100)
      table.integer('workload')

      table.foreign('courses').references('id').inTable(coursesTableName)
      table.foreign('typeDiscipline').references('id').inTable(typeDisciplineTableName)
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(disciplineTableName)
    .dropTableIfExists(usersTableName)
    .dropTableIfExists(coursesTableName)
    .dropTableIfExists(registryTableName)
    .dropTableIfExists(profilesTableName)
    .dropTableIfExists(rulesTableName)
    .dropTableIfExists(typeDisciplineTableName)
    .dropTableIfExists(statusRegistryTableName)
    .dropTableIfExists(campusTableName)
    .dropTableIfExists(calendarTableName)
}
