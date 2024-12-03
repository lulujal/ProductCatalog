const {comparePassword} = require('../helpers/bcrypt');
const {User} = require('../models');
const {generateToken} = require('../helpers/jwt');
let access_token = null;

class UserController {
    static async login (req, res) {
        const {email, password} = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error('Invalid Email');
        }
        const isValid = comparePassword(password, user.password);
        if (!isValid) {
            throw new Error('Invalid Password');
        }
        let payload = {
            email: user.email,
            id: user.id
        }   
        const access_token = generateToken(payload);
        return access_token;
    }

    static logout (req, res) {
        access_token = null;
        res.clearCookie("access_token");
        return res.redirect('/');
    }

}

module.exports = UserController;