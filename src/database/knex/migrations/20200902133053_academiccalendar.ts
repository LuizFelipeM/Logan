import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('calendar', function (table) {
    table.integer('id').primary()

    table.timestamp('createdAt', { precision: 6 }).notNullable()
    table.timestamp('lastUpdate', { precision: 6 }).notNullable()

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
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('calendar')
}
