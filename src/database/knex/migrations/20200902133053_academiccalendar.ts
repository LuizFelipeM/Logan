import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('calendar', function (table) {
    table.integer('id').primary()

    table.timestamp('createdAt', { precision: 6 }).notNullable()
    table.timestamp('lastUpdate', { precision: 6 }).notNullable()

    table.timestamp('StartAcademicYear', { precision: 6 }).notNullable()
    table.timestamp('AcademicYearEnd', { precision: 6 }).notNullable()

    table.timestamp('StartNotesP1', { precision: 6 }).notNullable()
    table.timestamp('FinalNotesP1', { precision: 6 }).notNullable()

    table.timestamp('StartNotesP2', { precision: 6 }).notNullable()
    table.timestamp('FinalNotesP2', { precision: 6 }).notNullable()

    table.timestamp('StartNotesSub', { precision: 6 }).notNullable()
    table.timestamp('FinalNotesSub', { precision: 6 }).notNullable()

    table.timestamp('StartNotesExam', { precision: 6 }).notNullable()
    table.timestamp('FinalNotesExam', { precision: 6 }).notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('calendar')
}
