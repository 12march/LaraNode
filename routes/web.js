const express = require('express');
const router = express.Router();




/* GET home page. */
router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/home', (req, res) => {
    res.render('home');
});


module.exports = router;