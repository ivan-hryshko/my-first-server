const Router = require('../framework/Router')
const userController = require('./user-controller')
const router = new Router()

router.get('/users', userController.getUsers)

router.post('/users', userController.createUser)

module.exports = router