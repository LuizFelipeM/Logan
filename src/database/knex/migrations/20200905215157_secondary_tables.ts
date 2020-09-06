import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
  // discipline table here
    .createTableIfNotExists('rules_in_profiles', function (table) {
      table.integer('profile').notNullable()
      table.integer('rule').notNullable()

      table.foreign('profile').references('id').inTable('profiles')
      table.foreign('rule').references('id').inTable('rules')
    })

    .createTableIfNotExists('current_semester', function (table) {
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

      table.foreign('calender').references('id').inTable('calender')
      table.foreign('dicipline').references('id').inTable('dicipline')
    })

    .createTableIfNotExists('classes', function (table) {
      table.increments('id').primary()

      table.integer('course').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('course').references('id').inTable('idCourse')
    })

    .createTableIfNotExists('students', function (table) {
      table.increments('id').primary()

      table.integer('user').notNullable()
      table.integer('ra').notNullable()
      table.integer('course').notNullable()
      table.integer('class').notNullable()

      table.foreign('user').references('id').inTable('users')
      table.foreign('ra').references('id').inTable('registry')
      table.foreign('course').references('id').inTable('course')
      table.foreign('class').references('id').inTable('classes')

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists('professor', function (table) {
      table.integer('id').primary()
      table.integer('usuario')

      table.foreign('usuario').references('id').inTable('users')
    })

    .createTableIfNotExists('subject', function (table) {
      table.integer('professor').notNullable()
      table.integer('discipline').notNullable()
      table.integer('classes').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('professor').references('id').inTable('professor')
      table.foreign('discipline').references('id').inTable('discipline')
      table.foreign('classes').references('id').inTable('classes')
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

      table.foreign('students').references('id').inTable('students')
      table.foreign('dicipline').references('id').inTable('dicipline')
      table.foreign('semester').references('id').inTable('semester')
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists('rules_in_profiles')
    .dropTableIfExists('note_fouls')
    .dropTableIfExists('subject')
    .dropTableIfExists('classes')
    .dropTableIfExists('current_semester')
    .dropTableIfExists('students')
    .dropTableIfExists('professor')
}
