import * as Knex from 'knex'

import { disciplineTableName } from '../../common/disciplineTable'
import { coursesTableName } from '../../common/coursesTable'
import { registryTableName } from '../../common/registryTable'
import { usersTableName } from '../../common/usersTable'
import { classesTableName } from '../../common/classesTable'
import { rulesInProfilesTableName } from '../../common/rulesInProfilesTable'
import { profilesTableName } from '../../common/profilesTable'
import { rulesTableName } from '../../common/rulesTable'
import { currentSemesterTableName } from '../../common/currentSemesterTable'
import { calendarTableName } from '../../common/calendarTable'
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

    .createTableIfNotExists(currentSemesterTableName, function (table) {
      table.increments('id').primary()

      table.integer('calender').notNullable()
      table.integer('dicipline').notNullable()

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

      table.foreign('calender').references('id').inTable(calendarTableName)
      table.foreign('dicipline').references('id').inTable(disciplineTableName)
    })

    .createTableIfNotExists(classesTableName, function (table) {
      table.increments('id').primary()

      table.integer('course').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('course').references('id').inTable(coursesTableName)
    })

    .createTableIfNotExists(studentsTableName, function (table) {
      table.increments('id').primary()

      table.integer('user').notNullable()
      table.integer('ra').notNullable()
      table.integer('course').notNullable()
      table.integer('class').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('user').references('id').inTable(usersTableName)
      table.foreign('ra').references('id').inTable(registryTableName)
      table.foreign('course').references('id').inTable(coursesTableName)
      table.foreign('class').references('id').inTable(classesTableName)
    })

    .createTableIfNotExists(professorTableName, function (table) {
      table.integer('id').primary()
      table.integer('usuario')

      table.foreign('usuario').references('id').inTable(usersTableName)
    })

    .createTableIfNotExists('subject', function (table) {
      table.integer('professor').notNullable()
      table.integer('discipline').notNullable()
      table.integer('classes').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('professor').references('id').inTable(professorTableName)
      table.foreign('discipline').references('id').inTable(disciplineTableName)
      table.foreign('classes').references('id').inTable(classesTableName)
    })

    .createTable('note_fouls', function (table) {
      table.integer('students').notNullable()
      table.integer('dicipline').notNullable()
      table.integer('semester').notNullable()

      table.decimal('noteP1', 2, 2).notNullable()
      table.decimal('noteP2', 2, 2).notNullable()
      table.decimal('noteSub', 2, 2).notNullable()
      table.decimal('noteExam', 2, 2).notNullable()
      table.integer('finalNote').notNullable()
      table.integer('fouls').notNullable()

      table.foreign('students').references('id').inTable(studentsTableName)
      table.foreign('dicipline').references('id').inTable(disciplineTableName)
      table.foreign('semester').references('id').inTable(currentSemesterTableName)
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(rulesInProfilesTableName)
    .dropTableIfExists(noteFoulsTableName)
    .dropTableIfExists(subjectsTableName)
    .dropTableIfExists(classesTableName)
    .dropTableIfExists(currentSemesterTableName)
    .dropTableIfExists(studentsTableName)
    .dropTableIfExists(professorTableName)
}
