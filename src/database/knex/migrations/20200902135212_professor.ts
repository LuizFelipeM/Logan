import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('professor', function (table) {
    table.integer('id').primary()
    table.integer('idUsuario')

    table.foreign('idUsuario').references('id').inTable('users')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('professor')
}
