const express = require('express');
const router = express.Router();

const LoginRequest = require('../app/Requests/LoginRequest');

//router.use(LoginRequest);

const LoginController = require('../app/Controller/LoginController');

router.post('/login',LoginRequest, LoginController.login);

router.get('/',(req, res)=>{
    sendApiResponse(res,app_status_code.success,"Welcome to our app",{})
});
module.exports = router;