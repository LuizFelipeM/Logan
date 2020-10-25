import * as Knex from 'knex'

import { disciplinesTableName } from '../../common/disciplinesTable'
import { coursesTableName } from '../../common/coursesTable'
import { registriesTableName } from '../../common/registriesTable'
import { usersTableName } from '../../common/usersTable'
import { classesTableName } from '../../common/classesTable'
import { rulesInProfilesTableName } from '../../common/rulesInProfilesTable'
import { profilesTableName } from '../../common/profilesTable'
import { rulesTableName } from '../../common/rulesTable'
import { semestersTableName } from '../../common/semestersTable'
import { studentsTableName } from '../../common/studentsTable'
import { professorsTableName } from '../../common/professorsTable'
import { subjectsTableName } from '../../common/subjectsTable'
import { noteFoulsTableName } from '../../common/noteFoulsTable'

export async function up (knex: Knex): Promise<void> {
  return knex.schema

    .createTableIfNotExists(rulesInProfilesTableName, function (table) {
      table.increments('id').primary()

      table.integer('profile').notNullable()
      table.integer('rule').notNullable()

      table.foreign('profile').references('id').inTable(profilesTableName)
      table.foreign('rule').references('id').inTable(rulesTableName)
    })

    .createTableIfNotExists(classesTableName, function (table) {
      table.increments('id').primary()

      table.integer('course').notNullable()

      table.foreign('course').references('id').inTable(coursesTableName)
    })

    .createTableIfNotExists(studentsTableName, function (table) {
      table.increments('id').primary()

      table.integer('user').notNullable().unique()
      table.integer('ra').notNullable()
      table.integer('course').notNullable()
      table.integer('class').notNullable()

      table.foreign('user').references('id').inTable(usersTableName)
      table.foreign('ra').references('id').inTable(registriesTableName)
      table.foreign('course').references('id').inTable(coursesTableName)
      table.foreign('class').references('id').inTable(classesTableName)
    })

    .createTableIfNotExists(professorsTableName, function (table) {
      table.increments('id').primary()

      table.integer('user')

      table.foreign('user').references('id').inTable(usersTableName)
    })

    .createTableIfNotExists(subjectsTableName, function (table) {
      table.increments('id').primary()

      table.integer('professor').notNullable()
      table.integer('discipline').notNullable()
      table.integer('semester').notNullable()
      table.integer('class').notNullable()
      table.integer('class_time').notNullable()

      table.foreign('professor').references('id').inTable(professorsTableName)
      table.foreign('discipline').references('id').inTable(disciplinesTableName)
      table.foreign('semester').references('id').inTable(semestersTableName)
      table.foreign('class').references('id').inTable(classesTableName)
    })

    .createTableIfNotExists(noteFoulsTableName, function (table) {
      table.increments('id').primary()

      table.integer('students').notNullable()
      table.integer('discipline').notNullable()

      table.integer('fouls').notNullable()
      table.decimal('note_p1', 4, 2).notNullable()
      table.decimal('note_p2', 4, 2).notNullable()
      table.decimal('note_sub', 4, 2).notNullable()
      table.decimal('note_exam', 4, 2).notNullable()
      table.integer('final_note').notNullable()

      table.foreign('students').references('id').inTable(studentsTableName)
      table.foreign('discipline').references('id').inTable(disciplinesTableName)
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(rulesInProfilesTableName)
    .dropTableIfExists(noteFoulsTableName)
    .dropTableIfExists(subjectsTableName)
    .dropTableIfExists(classesTableName)
    .dropTableIfExists(semestersTableName)
    .dropTableIfExists(studentsTableName)
    .dropTableIfExists(professorsTableName)
}
