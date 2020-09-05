import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('status_registry', function (table) {
    table.increments('id').primary()

    table.string('statusRegistry', 50).notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropSchemaIfExists('status_registry')
}
