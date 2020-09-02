import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('Course', function (table) {
    table.integer('id').primary()

    table.integer('idCampus')
    table.integer('totalSemester')
    table.string('name', 50)

    table.foreign('idCampus').references('id').inTable('Campus')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Course')
}
