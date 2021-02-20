'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CoverSing extends Model {
  static get table () {
    return 'cover_sings'
  }
  static get primaryKey () {
    return 'id'
  }
}

module.exports = CoverSing
