const express = require('express');
const router = express.Router();

const UserController = require('../app/Controller/UserController');
const UserRequest = require('../app/Requests/UserRequest');

router.get('/userlist',UserController.getUserList);

router.post('/add/user',UserRequest, UserController.addUser);

module.exports = router;
