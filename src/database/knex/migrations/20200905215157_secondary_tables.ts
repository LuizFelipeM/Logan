import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
  // discipline table here
    .createTableIfNotExists('rules_in_profiles', function (table) {
      table.integer('idProfile').notNullable()
      table.integer('idRule').notNullable()

      table.foreign('idProfile').references('id').inTable('profiles')
      table.foreign('idRule').references('id').inTable('rules')
    })

    .createTableIfNotExists('current_semester', function (table) {
      table.increments('id').primary()

      table.integer('idCalender').notNullable()
      table.integer('idDicipline').notNullable()

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

      table.foreign('idCalender').references('id').inTable('calender')
      table.foreign('idDicipline').references('id').inTable('dicipline')
    })

    .createTableIfNotExists('classes', function (table) {
      table.increments('id').primary()

      table.integer('idCourse').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('idCourse').references('id').inTable('idCourse')
    })

    .createTableIfNotExists('students', function (table) {
      table.increments('id').primary()

      table.integer('idUser').notNullable()
      table.integer('ra').notNullable()
      table.integer('idCourse').notNullable()
      table.integer('idClass').notNullable()

      table.foreign('idUser').references('id').inTable('users')
      table.foreign('ra').references('id').inTable('registry')
      table.foreign('idCourse').references('id').inTable('course')
      table.foreign('idClass').references('id').inTable('classes')

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })

    .createTableIfNotExists('professor', function (table) {
      table.integer('id').primary()
      table.integer('idUsuario')

      table.foreign('idUsuario').references('id').inTable('users')
    })

    .createTableIfNotExists('subject', function (table) {
      table.integer('idProfessor').notNullable()
      table.integer('idDiscipline').notNullable()
      table.integer('idClasses').notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('idProfessor').references('id').inTable('professor')
      table.foreign('idDiscipline').references('id').inTable('discipline')
      table.foreign('idClasses').references('id').inTable('classes')
    })

    .createTable('note_fouls', function (table) {
      table.integer('idStudents').notNullable()
      table.integer('idDicipline').notNullable()
      table.integer('idSemester').notNullable()

      table.decimal('noteP1', 2, 2).notNullable()
      table.decimal('noteP2', 2, 2).notNullable()
      table.decimal('noteSub', 2, 2).notNullable()
      table.decimal('noteExam', 2, 2).notNullable()
      table.integer('finalNote').notNullable()
      table.integer('fouls').notNullable()

      table.foreign('idStudents').references('id').inTable('students')
      table.foreign('idDicipline').references('id').inTable('dicipline')
      table.foreign('idSemester').references('id').inTable('semester')
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
