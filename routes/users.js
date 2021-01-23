const path = require('path');
const express = require('express');
const router = express.Router();

// import controllers
const userControllers= require('../controllers/users');


router.get('/registration', userControllers.getRegistration);

router.post('/registration', userControllers.postregistration);


module.exports= router;