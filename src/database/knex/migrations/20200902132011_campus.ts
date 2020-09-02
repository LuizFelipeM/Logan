import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('campus', function (table) {
    table.integer('id').primary()
    table.string('name', 100)
    table.string('uf', 50)
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('campus')
}
