import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('registry', function (table) {
    table.increments('ra_registry').primary()

    table.integer('idStatus').notNullable()

    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.timestamp('openRegistry', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('endEstimate', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.string('periodStudy', 20)
    table.text('observation')
    table.string('incomeFamiliar', 50)
    table.text('homeInstitution')

    table.foreign('idStatus').references('id').inTable('statusRegistry')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('registry')
}
