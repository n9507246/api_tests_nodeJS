const {User, Post} = require('../models')

module.exports = {
    async index(req,res){

        const dataUser = await User.findAll({
            // include: [{
            //     association: 'Post'
            // }]
        })
        res.send( dataUser )
    },
    async create(req, res){

        await User.create({
            name: req.body.name
        })
        res.json('ajksd')
    }
}