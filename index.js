require('dotenv').config()
const express = require('express')
const app = express()

// const {User} = require('./models')
// app.get('/api/user', async (req,res) => {
//     res.send(await User.findAll())
// })
const routes = require('./router')
app.use('/api', routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
