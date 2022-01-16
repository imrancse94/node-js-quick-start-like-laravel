const validate = require('./BaseRequest');

module.exports = (request, response, next) => {
  return validate(request, response, next, {
        'name': 'required',
        'email': 'required|email|unique:users,email',
        'password': 'required|min:6',
    });
}



