const {User} = require('../models')

module.exports = {
    async index(req,res){
        res.send(await User.findAll())
    }
}