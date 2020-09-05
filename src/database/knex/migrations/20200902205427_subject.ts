import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('subject', function (table) {
    table.integer('idProfessor').notNullable()
    table.integer('idDiscipline').notNullable()// Ask Pedro what he named here
    table.integer('idClasses').notNullable()

    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.foreign('idProfessor').references('id').inTable('professor')
    table.foreign('idDiscipline').references('id').inTable('discipline')
    table.foreign('idClasses').references('id').inTable('classes')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('subject')
}
