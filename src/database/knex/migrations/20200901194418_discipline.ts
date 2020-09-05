import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('discipline', function (table) {
    table.increments('id').primary()

    table.integer('idCourses')
    table.integer('idTypeDiscipline')
    table.string('name', 100)
    table.integer('workload')

    table.foreign('idCourses').references('id').inTable('courses')
    table.foreign('idTypeDiscipline').references('id').inTable('type_discipline')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('discipline')
}
