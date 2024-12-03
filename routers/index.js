const router = require('express').Router();
const {authentication} = require('../middlewares/authentication');
const UserController = require('../controllers/userController');
const axios = require('axios');

// render login page
router.get('/', (req, res) => {
    res.render('login', { loginError: null });
});
// User Login
router.post('/login', async (req, res) => {
    try{
        const access_token = await UserController.login(req, res);
        res.cookie("access_token", access_token);
        res.redirect('/catalog');
    }catch(error){
        res.status(401).render('login', { loginError: error.message });
    }
});

// user logout
router.get('/logout', (req, res) => {
    UserController.logout(req, res);
});

// render catalog page
router.get('/catalog', (req, res) => {
    res.render('productCatalog');
});

// render cart page
router.get('/cart', (req, res) => {
    res.render('cart');
});

module.exports = router;