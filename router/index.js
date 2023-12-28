const Router = require('express')
const router = new Router()

router.use('/user',  require('./usersRoutes.js'))
router.use('/post', require('./postRoutes.js'))

module.exports = router