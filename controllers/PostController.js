const {Post} = require('../models')

module.exports = {
    async index(req,res){
        res.send( await Post.findAll() )
    },

}