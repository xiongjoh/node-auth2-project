const router = require('express').Router()
const Users = require('../users/users-model')
const bcryptjs = require('bcryptjs');

const hasValues = async (req, res, next) => {
    if (!req.body) {
        res.status(400).json({messge:`missing body`})
    } else if (!req.body.username || !req.body.password || !req.body.department) {
        res.status(400).json({message:`missing username, password, department`})
    } else {
        const rounds = process.env.BCRYPT_ROUNDS || 10;
        const hash = bcryptjs.hashSync(req.body.password, rounds)
        req.body.password = hash
        next()
    }
}

router.post('/', hasValues, async (req, res) => {
    try {
        const user = await Users.register(req.body)
        console.log(user)
        res.status(201).json(user)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = router;