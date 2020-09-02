import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('registry', function (table) {
    table.integer('idStatus').notNullable()
    table.increments('ra_registry').primary()

    table.foreign('idStatus').references('id').inTable('statusRegistry')

    table.timestamp('creatAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('endEstimate', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.string('periodStudy', 20)
    table.text('observation', 'longtext')
    table.string('incomeFamiliar', 50)
    table.text('homeInstitution', 'longtext')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('registry')
}
