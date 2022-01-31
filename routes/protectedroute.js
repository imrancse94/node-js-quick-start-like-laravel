const express = require('express');
const router = express.Router();

router.use(require('./../app/Middleware/auth'));

const UserController = require('../app/Controller/UserController');
const ModuleController = require('../app/Controller/ModuleController');

const UserRequest = require('../app/Requests/UserRequest');
const ModuleRequest = require('../app/Requests/ModuleRequest');


router.get('/userlist',UserController.getUserList);


router.post('/add/user',UserRequest, UserController.addUser);

router.get('/module/list', ModuleController.getlist);
router.post('/add/module',ModuleRequest, ModuleController.add);
router.put('/module/edit/:id',ModuleRequest, ModuleController.edit);
router.delete('/module/delete/:id', ModuleController.delete);

module.exports = router;
