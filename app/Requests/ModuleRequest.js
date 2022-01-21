const validate = require('./BaseRequest');

module.exports = (request, response, next) => {
  var idString = request?.params?.id ? ','+request.params.id : '';
  return validate(request, response, next, {
    'name': `required|unique:modules,email${idString}`,
    'children': 'array'
  },{
    children:{
      array:"children must be an array"
    }
  });
}



