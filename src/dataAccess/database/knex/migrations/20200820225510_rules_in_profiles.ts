import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema
    .createTable('rules_in_profiles', function (table) {
      table.text('idProfile').notNullable()
      table.text('idRule').notNullable()

      table.foreign('idProfile').references('id').inTable('profiles')
      table.foreign('idRule').references('id').inTable('rules')
    })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('rules_in_profiles')
}
