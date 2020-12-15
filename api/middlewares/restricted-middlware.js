const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        res.status(401).json({message:`no token found!`})
    } else {
        jwt.verify(token, jwtSecret, (err, decode) => {
            if (err) {
                res.status(401).json({message:`token is bad: ${err.message}`})
            } else {
                req.decodedToken = decode
                next()
            }
        })
    }
}