const validate = require('./BaseRequest');

module.exports = (request, response, next) => {
  var idString = request?.params?.id ? ','+request.params.id : '';
  return validate(request, response, next, {
    'name': 'required',
    'email': `required|email|unique:users,email${idString}`,
    'password': 'required|min:6'
  });
}



