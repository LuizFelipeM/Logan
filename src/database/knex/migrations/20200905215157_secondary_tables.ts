import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
  // discipline table here
    .createTableIfNotExists('rules_in_profiles', function (table) {
      table.integer('Profile').notNullable()
      table.integer('Rule').notNullable()

      table.foreign('Profile').references('id').inTable('profiles')
      table.foreign('Rule').references('id').inTable('rules')
    })

    .createTableIfNotExists('current_semester', function (table) {
      table.increments('id').primary()

      table.integer('Calender').notNullable()
      table.integer('Dicipline').notNullable()

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

      table.foreign('Calender').references('id').inTable('calender')
      table.foreign('Dicipline').references('id').inTable('dicipline')
    })

    .createTableIfNotExists('classes', function (table) {
      table.increments('id').primary()

      table.integer('Course').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('Course').references('id').inTable('idCourse')
    })

    .createTableIfNotExists('students', function (table) {
      table.increments('id').primary()

      table.integer('User').notNullable()
      table.integer('ra').notNullable()
      table.integer('Course').notNullable()
      table.integer('Class').notNullable()

      table.foreign('User').references('id').inTable('users')
      table.foreign('ra').references('id').inTable('registry')
      table.foreign('Course').references('id').inTable('course')
      table.foreign('Class').references('id').inTable('classes')

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists('professor', function (table) {
      table.integer('id').primary()
      table.integer('Usuario')

      table.foreign('Usuario').references('id').inTable('users')
    })

    .createTableIfNotExists('subject', function (table) {
      table.integer('Professor').notNullable()
      table.integer('Discipline').notNullable()
      table.integer('Classes').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('Professor').references('id').inTable('professor')
      table.foreign('Discipline').references('id').inTable('discipline')
      table.foreign('Classes').references('id').inTable('classes')
    })

    .createTable('note_fouls', function (table) {
      table.integer('Students').notNullable()
      table.integer('Dicipline').notNullable()
      table.integer('Semester').notNullable()

      table.decimal('noteP1', 2, 2).notNullable()
      table.decimal('noteP2', 2, 2).notNullable()
      table.decimal('noteSub', 2, 2).notNullable()
      table.decimal('noteExam', 2, 2).notNullable()
      table.integer('finalNote').notNullable()
      table.integer('fouls').notNullable()

      table.foreign('Students').references('id').inTable('students')
      table.foreign('Dicipline').references('id').inTable('dicipline')
      table.foreign('Semester').references('id').inTable('semester')
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
