const Router = require('express')
const router = new Router()
const PostController = require('../controllers/PostController.js')

router.get('/', PostController.index)

module.exports = router