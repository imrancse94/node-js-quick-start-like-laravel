const jwt = require('jsonwebtoken');

require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET;


const verifyToken = (req, res, next) => {
    
    const token =
      req.body.token || req.query.token || req.headers["authorization"];
  
    if (!token) {
        return sendApiErrorResponse(res,app_status_code.token_required,"A token is required for authentication",{});
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      //req.user = decoded;
    } catch (err) {
      return sendApiErrorResponse(res,app_status_code.validation_error,"Unauthenticate Token",{}); 
    }
    return next();
  };
  
  module.exports = verifyToken;