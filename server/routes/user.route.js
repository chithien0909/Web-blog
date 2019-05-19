//Database User
// const UserDB = require('../models/user');
const express = require('express');
//Multer library upload image
// const multer = require('multer');
//User controller

// const upload = multer({dest:'./public/uploads'});
const router = express.Router();
const userController = require('../controllers/user.controller');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/login',userController.login);
router.post('/login',userController.postLogin);

module.exports = router;