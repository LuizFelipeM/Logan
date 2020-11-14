import * as Knex from 'knex'

import { profilesTableName } from '../../common/profilesTable'
import { usersTableName } from '../../common/usersTable'
import { rulesTableName } from '../../common/rulesTable'
import { disciplineTypesTableName } from '../../common/disciplineTypesTable'
import { registriesStatusTableName } from '../../common/registriesStatusTable'
import { campusTableName } from '../../common/campusTable'
import { registriesTableName } from '../../common/registriesTable'
import { calendarsTableName } from '../../common/calendarsTable'
import { coursesTableName } from '../../common/coursesTable'
import { disciplinesTableName } from '../../common/disciplinesTable'
import { semestersTableName } from '../../common/semestersTable'

export async function up (knex: Knex): Promise<void> {
  return knex.schema

    .createTableIfNotExists(profilesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 255).notNullable().unique()
    })

    .createTableIfNotExists(usersTableName, function (table) {
      table.increments('id').primary()

      // table.string('email').notNullable()
      // table.string('password').notNullable()

      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('gender', 50).notNullable()
      table.timestamp('birth_date')

      table.integer('profile')

      table.foreign('profile').references('id').inTable(profilesTableName)
    })

    .createTableIfNotExists(rulesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 255).notNullable().unique().index()
      table.string('description', 500)
    })

    .createTableIfNotExists(disciplineTypesTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 100)
    })

    .createTableIfNotExists(registriesStatusTableName, function (table) {
      table.increments('id').primary()

      table.string('name', 50).notNullable()
    })

    .createTableIfNotExists(registriesTableName, function (table) {
      table.increments('id').primary()

      table.integer('status').notNullable()
      table.timestamp('start_registry', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('end_estimate', { precision: 6 }).notNullable()
      table.string('period_study', 20)
      table.text('observation')
      table.decimal('familiar_income')
      table.text('origin_institution')

      table.foreign('status').references('id').inTable(registriesStatusTableName)
    })

    .createTableIfNotExists(campusTableName, function (table) {
      table.increments('id').primary()
      table.string('name', 100)
      table.string('uf', 50)
    })

    .createTableIfNotExists(coursesTableName, function (table) {
      table.increments('id').primary()

      table.integer('campus').notNullable()
      table.integer('total_semester').notNullable()
      table.string('name', 50).notNullable()

      table.foreign('campus').references('id').inTable(campusTableName)
    })

    .createTableIfNotExists(calendarsTableName, function (table) {
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
    })

    .createTableIfNotExists(semestersTableName, function (table) {
      table.increments('id').primary()

      table.integer('course').notNullable()
      table.integer('calendar').notNullable()

      table.integer('semester_course').notNullable()
      table.integer('semester_year').notNullable()

      table.timestamp('year', { precision: 6 }).notNullable()

      table.timestamp('eval_p1_start', { precision: 6 }).notNullable()
      table.timestamp('eval_p1_end', { precision: 6 }).notNullable()

      table.timestamp('eval_p2_start', { precision: 6 }).notNullable()
      table.timestamp('eval_p2_end', { precision: 6 }).notNullable()

      table.timestamp('eval_sub_start', { precision: 6 }).notNullable()
      table.timestamp('eval_sub_end', { precision: 6 }).notNullable()

      table.timestamp('eval_exam_start', { precision: 6 }).notNullable()
      table.timestamp('eval_exam_end', { precision: 6 }).notNullable()

      table.foreign('course').references('id').inTable(coursesTableName)
      table.foreign('calendar').references('id').inTable(calendarsTableName)
    })

    .createTableIfNotExists(disciplinesTableName, function (table) {
      table.increments('id').primary()

      table.integer('course')
      table.integer('type_discipline')

      table.string('name', 100)
      table.integer('workload')

      table.foreign('course').references('id').inTable(coursesTableName)
      table.foreign('type_discipline').references('id').inTable(disciplineTypesTableName)
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(disciplinesTableName)
    .dropTableIfExists(usersTableName)
    .dropTableIfExists(coursesTableName)
    .dropTableIfExists(registriesTableName)
    .dropTableIfExists(profilesTableName)
    .dropTableIfExists(rulesTableName)
    .dropTableIfExists(disciplineTypesTableName)
    .dropTableIfExists(registriesStatusTableName)
    .dropTableIfExists(campusTableName)
    .dropTableIfExists(calendarsTableName)
}
