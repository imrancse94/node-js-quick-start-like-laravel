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
      req.user = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return sendApiErrorResponse(res,app_status_code.validation_error,"Unauthenticate Token",{error:err.message}); 
    }
    return next();
  };
  
  module.exports = verifyToken;