const express = require('express')

const Users = require('./users-model')
const restricted = require('../middlewares/restricted-middlware')

const router = express.Router()

router.get('/', restricted, async (req, res) => {
    try {
        const user = await Users.getUsers()
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = router;