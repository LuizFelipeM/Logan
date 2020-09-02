import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('typediscipline', function (table) {
    table.increments('id').primary()

    table.string('name', 100)
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('typediscipline')
}
