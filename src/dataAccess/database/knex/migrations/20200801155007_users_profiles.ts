import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
    .createTable('profiles', function (table) {
      table.text('id').notNullable().primary()

      table.string('name', 255).notNullable()

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))
    })
    .createTable('users', function (table) {
      table.text('id').notNullable().primary()

      table.string('firstName', 255).notNullable()
      table.string('lastName', 255).notNullable()

      table.string('idProfile')

      table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
      table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

      table.foreign('idProfile').references('id').inTable('profiles')
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('users')
    .dropTable('profiles')
}
