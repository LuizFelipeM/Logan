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
import { semesterTableName } from '../../common/semesterTable'

export async function up (knex: Knex): Promise<void> {
  return knex.schema

    .createTableIfNotExists(profilesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 255).notNullable().unique()

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists(usersTableName, function (table) {
      table.increments('id').primary()

      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('gender', 50).notNullable()
      table.timestamp('birth_date')

      table.integer('profile')

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('profile').references('id').inTable(profilesTableName)
    })

    .createTableIfNotExists(rulesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 255).notNullable().unique().index()
      table.string('description', 500)

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))
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
      table.timestamp('start_registry', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('end_estimate', { precision: 6 }).notNullable()
      table.string('period_study', 20)
      table.text('observation')
      table.decimal('familiar_income')
      table.text('origin_institution')

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))

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

      table.timestamp('start_academic_year', { precision: 6 }).notNullable()
      table.timestamp('academic_year_end', { precision: 6 }).notNullable()

      table.timestamp('start_notes_p1', { precision: 6 }).notNullable()
      table.timestamp('final_notes_p1', { precision: 6 }).notNullable()

      table.timestamp('start_notes_p2', { precision: 6 }).notNullable()
      table.timestamp('final_notes_p2', { precision: 6 }).notNullable()

      table.timestamp('start_notes_sub', { precision: 6 }).notNullable()
      table.timestamp('final_notes_sub', { precision: 6 }).notNullable()

      table.timestamp('start_notes_exam', { precision: 6 }).notNullable()
      table.timestamp('final_notes_exam', { precision: 6 }).notNullable()

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists(semesterTableName, function (table) {
      table.increments('id').primary()

      table.integer('calendar').notNullable()
      table.integer('semester_course').notNullable()
      table.integer('semester_year').notNullable()

      table.timestamp('year', { precision: 6 }).notNullable()

      table.timestamp('evalP1Start', { precision: 6 }).notNullable()
      table.timestamp('evalP1End', { precision: 6 }).notNullable()

      table.timestamp('evalP2Start', { precision: 6 }).notNullable()
      table.timestamp('evalP2End', { precision: 6 }).notNullable()

      table.timestamp('evalSubStart', { precision: 6 }).notNullable()
      table.timestamp('evalSubEnd', { precision: 6 }).notNullable()

      table.timestamp('evalExamStart', { precision: 6 }).notNullable()
      table.timestamp('evalExamEnd', { precision: 6 }).notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('calendar').references('id').inTable(calendarTableName)
    })

    .createTableIfNotExists(disciplineTableName, function (table) {
      table.increments('id').primary()

      table.integer('semester')

      table.integer('course')
      table.integer('type_discipline')
      table.string('name', 100)
      table.integer('workload')

      table.foreign('course').references('id').inTable(coursesTableName)
      table.foreign('semester').references('id').inTable(semesterTableName)
      table.foreign('type_discipline').references('id').inTable(typeDisciplineTableName)
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
