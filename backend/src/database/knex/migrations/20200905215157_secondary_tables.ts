import * as Knex from 'knex'

import { disciplineTableName } from '../../common/disciplineTable'
import { coursesTableName } from '../../common/coursesTable'
import { registryTableName } from '../../common/registryTable'
import { usersTableName } from '../../common/usersTable'
import { classesTableName } from '../../common/classesTable'
import { rulesInProfilesTableName } from '../../common/rulesInProfilesTable'
import { profilesTableName } from '../../common/profilesTable'
import { rulesTableName } from '../../common/rulesTable'
import { semesterTableName } from '../../common/semesterTable'
import { studentsTableName } from '../../common/studentsTable'
import { professorTableName } from '../../common/professorTable'
import { subjectsTableName } from '../../common/subjectTable'
import { noteFoulsTableName } from '../../common/noteFoulsTable'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(rulesInProfilesTableName, function (table) {
      table.integer('profile').notNullable()
      table.integer('rule').notNullable()

      table.foreign('profile').references('id').inTable(profilesTableName)
      table.foreign('rule').references('id').inTable(rulesTableName)
    })

    .createTableIfNotExists(classesTableName, function (table) {
      table.increments('id').primary()

      table.integer('course').notNullable()

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('course').references('id').inTable(coursesTableName)
    })

    .createTableIfNotExists(studentsTableName, function (table) {
      table.increments('id').primary()

      table.integer('user').notNullable().unique()
      table.integer('ra').notNullable()
      table.integer('course').notNullable()
      table.integer('class').notNullable()

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('user').references('id').inTable(usersTableName)
      table.foreign('ra').references('id').inTable(registryTableName)
      table.foreign('course').references('id').inTable(coursesTableName)
      table.foreign('class').references('id').inTable(classesTableName)
    })

    .createTableIfNotExists(professorTableName, function (table) {
      table.increments('id').primary()
      table.integer('user')

      table.foreign('user').references('id').inTable(usersTableName)
    })

    .createTableIfNotExists(subjectsTableName, function (table) {
      table.integer('professor').notNullable()
      table.integer('discipline').notNullable()
      table.integer('classes').notNullable()

      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('last_update', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('professor').references('id').inTable(professorTableName)
      table.foreign('discipline').references('id').inTable(disciplineTableName)
      table.foreign('classes').references('id').inTable(classesTableName)
    })

    .createTableIfNotExists(noteFoulsTableName, function (table) {
      table.increments('id').primary()
      table.integer('students').notNullable()
      table.integer('discipline').notNullable()
      table.integer('semester').notNullable()

      table.decimal('note_p1', 4, 2).notNullable()
      table.decimal('note_p2', 4, 2).notNullable()
      table.decimal('note_sub', 4, 2).notNullable()
      table.decimal('note_exam', 4, 2).notNullable()
      table.integer('final_note').notNullable()
      table.integer('fouls').notNullable()

      table.foreign('students').references('id').inTable(studentsTableName)
      table.foreign('discipline').references('id').inTable(disciplineTableName)
      table.foreign('semester').references('id').inTable(semesterTableName)
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(rulesInProfilesTableName)
    .dropTableIfExists(noteFoulsTableName)
    .dropTableIfExists(subjectsTableName)
    .dropTableIfExists(classesTableName)
    .dropTableIfExists(semesterTableName)
    .dropTableIfExists(studentsTableName)
    .dropTableIfExists(professorTableName)
}
