const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserConrtoller.js')

router.get('/', UserController.index)
router.post('/create', UserController.create)
module.exports = router