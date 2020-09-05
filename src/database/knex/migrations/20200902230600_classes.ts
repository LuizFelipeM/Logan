import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('classes', function (table) {
    table.increments('id').primary()

    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.integer('idCourse').notNullable()

    table.foreign('idCourse').references('id').inTable('idCourse')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropSchemaIfExists('classes')
}
