const express = require('express');
const router = express.Router();

const UserController = require('../app/Controller/UserController');
const ModuleController = require('../app/Controller/ModuleController');
const UserRequest = require('../app/Requests/UserRequest');

router.get('/userlist',UserController.getUserList);

router.get('/modulelist',ModuleController.getModuleList);

router.post('/add/user',UserRequest, UserController.addUser);

module.exports = router;
