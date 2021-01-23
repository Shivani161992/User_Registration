const path = require('path');
const express = require('express');
const router = express.Router();

// import paths

const userControllers= require('../controllers/users');


router.get('/summary', userControllers.getSummary);

module.exports= router;