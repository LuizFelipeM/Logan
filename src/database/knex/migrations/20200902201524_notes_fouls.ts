import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('noteFouls', function (table) {
    table.integer('idStudents').notNullable()// FK
    table.integer('idDicipline').notNullable()// FK
    table.integer('idSemester').notNullable()// FK

    table.decimal('noteP1', 2, 2).notNullable()
    table.decimal('noteP2', 2, 2).notNullable()
    table.decimal('noteSub', 2, 2).notNullable()
    table.decimal('noteExam', 2, 2).notNullable()
    table.integer('finalNote').notNullable()
    table.integer('fouls').notNullable()

    table.foreign('idStudents').references('id').inTable('students')
    table.foreign('idDicipline').references('id').inTable('dicipline')// Change after
    table.foreign('idSemester').references('id').inTable('semester')
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('noteFouls')
}
