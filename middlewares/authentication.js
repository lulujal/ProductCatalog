const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

async function authentication(req, res, next){
    try {
        const {access_token} = req.headers
        if (!access_token) {
            throw {
                name: 'AuthenticationError',
                devMessage: 'Please Login First'
            }
        }
        const decoded = verifyToken(access_token)
        const user = await User.findOne({
            where: {
                email: decoded.email
            }
        })
        if (!user) {
            throw {
                name: 'AuthenticationError',
                devMessage: 'User Not Found'
            }
        }
        req.user = decoded
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    authentication
}