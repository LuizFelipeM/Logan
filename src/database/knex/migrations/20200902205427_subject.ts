import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('subject', function (table) {
    table.integer('idTeacher').notNullable()
    table.integer('idDiscipline').notNullable()// Ask Pedro what he named here
    table.integer('idClasses').notNullable()

    table.foreign('idTeacher').references('id').inTable('teachers')
    table.foreign('idDiscipline').references('id').inTable('discipline')
    table.foreign('idClasses').references('id').inTable('classes')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('subject')
}
