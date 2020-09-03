import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('classes', function (table) {
    table.increments('id').primary()

    table.integer('idCourse').notNullable()

    table.foreign('idCourse').references('id').inTable('idCourse')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropSchemaIfExists('classes')
}
