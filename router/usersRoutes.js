const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserConrtoller.js')

router.use('/', UserController.index)

module.exports = router