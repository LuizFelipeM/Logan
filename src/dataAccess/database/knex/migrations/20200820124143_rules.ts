import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists('rules', function (table) {
      table.text('id').notNullable().primary()

      table.string('name', 255).notNullable().unique().index()
      table.string('description', 500)

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('rules')
}
