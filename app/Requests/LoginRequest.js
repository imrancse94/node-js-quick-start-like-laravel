const validate = require('./BaseRequest');

module.exports = (request, response, next) => {
  return validate(request, response, next, {
    'email': 'required|email',
    'password': 'required|min:6'
  });
}



