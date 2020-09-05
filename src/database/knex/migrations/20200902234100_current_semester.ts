import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('currentSemester', function (table) {
    table.increments('id').primary()// PK of table Current Semester

    table.integer('idCalender').notNullable()
    table.integer('idDicipline').notNullable()

    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.timestamp('evalP1Start', { precision: 6 }).notNullable()
    table.timestamp('evalP1End', { precision: 6 }).notNullable()

    table.timestamp('evalP2Start', { precision: 6 }).notNullable()
    table.timestamp('evalP2End', { precision: 6 }).notNullable()

    table.timestamp('evalSubStart', { precision: 6 }).notNullable()
    table.timestamp('evalSubEnd', { precision: 6 }).notNullable()

    table.timestamp('evalExamStart', { precision: 6 }).notNullable()
    table.timestamp('evalExamEnd', { precision: 6 }).notNullable()

    table.foreign('idCalender').references('id').inTable('calender')
    table.foreign('idDicipline').references('id').inTable('dicipline')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropSchemaIfExists('statusRegistry')
}
