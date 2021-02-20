'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.get('/', 'CoverSingController.index')
  Route.get('/:id', 'CoverSingController.show')
  Route.post('/', 'CoverSingController.store')
  Route.put('/:id', 'CoverSingController.update')
  Route.delete('/:id', 'CoverSingController.delete')
}).prefix('api/v1/songlist')
