import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('students', function (table) {
    table.increments('id').primary()// PK of table Studants, will be used on "grades and absence" like a FK

    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('lastUpdate', { precision: 6 }).defaultTo(knex.fn.now(6))

    table.integer('idUser').notNullable()
    table.integer('ra').notNullable()
    table.integer('idCourse').notNullable()
    table.integer('idClass').notNullable()

    table.foreign('idUser').references('id').inTable('users')
    table.foreign('ra').references('id').inTable('registry')
    table.foreign('idCourse').references('id').inTable('course')// Change the name on "intable", ask Pedro which one he inserted
    table.foreign('idClass').references('id').inTable('classes')// Talk with Luiz about this name on "intable", need to be compatible whith other table he´ll make
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('students')
}
