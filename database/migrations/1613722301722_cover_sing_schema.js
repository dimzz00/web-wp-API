'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoverSingSchema extends Schema {
  up () {
    this.create('cover_sings', (table) => {
      table.increments()
      table.string('artist')
      table.string('title')
      table.string('link')
      table.timestamps()
    })
  }

  down () {
    this.drop('cover_sings')
  }
}

module.exports = CoverSingSchema
