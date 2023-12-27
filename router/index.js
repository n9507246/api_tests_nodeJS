const Router = require('express')
const router = new Router()
const usersRoutes = require('./usersRoutes.js')

router.use('/user', usersRoutes)

module.exports = router