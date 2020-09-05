import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('calendar', function (table) {
    table.integer('id').primary()

    table.timestamp('StartAcademicYear', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('AcademicYearEnd', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.timestamp('StartNotesP1', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('FinalNotesP1', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.timestamp('StartNotesP2', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('FinalNotesP2', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.timestamp('StartNotesSub', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('FinalNotesSub', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.timestamp('StartNotesExam', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('FinalNotesExam', { precision: 6 }).defaultTo(knex.fn.now(6))
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('calendar')
}
