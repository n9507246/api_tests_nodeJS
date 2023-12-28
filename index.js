require('dotenv').config()
const PORT = process.env.PORT || 5000

const express = require('express')
express()
    .use(require('body-parser').urlencoded({ extended: false }))
    .use('/api', require('./router'))
    .listen(PORT, () => console.log(`Server started on port ${PORT}`))
