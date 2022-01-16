const express = require('express');
const router = express.Router();

const LoginController = require('../app/Controller/LoginController');
const LoginRequest = require('../app/Requests/LoginRequest');

router.get('/login',LoginRequest, LoginController.login);

module.exports = router;